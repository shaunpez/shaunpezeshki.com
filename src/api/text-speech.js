const fs = require('fs');
const path = require('path');
const util = require('util');
const matter = require('gray-matter');
const { synthesizeSpeech } = require('../utils/text-to-speech'); // Correct import

const blogDir = path.resolve(__dirname, '../blog'); // Adjusted path
const outputDir = path.resolve(__dirname, '../../static/audio'); // Adjusted path

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function extractTextFromMarkdown(file) {
  const content = fs.readFileSync(file, 'utf8');
  const { data, content: markdownContent } = matter(content);

  const remark = await import('remark');
  const html = await import('remark-html');
  const result = await remark.remark().use(html.default).process(markdownContent);

  const plainText = result.toString().replace(/(<([^>]+)>)/gi, "");
  return { slug: data.slug, title: data.title, plainText };
}

async function processBlogPosts() {
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const { slug, title, plainText } = await extractTextFromMarkdown(filePath);
    const outputFilePath = path.join(outputDir, `${slug}.mp3`);
    
    // Check if the audio file already exists
    if (fs.existsSync(outputFilePath)) {
      console.log(`Audio file already exists: ${outputFilePath}, skipping...`);
      continue;
    }

    const textToSynthesize = `${title}. ${plainText}`; // Prepend title to plain text

    await synthesizeSpeech(textToSynthesize, slug); // Call the function with slug
    console.log(`Audio file generated: ${outputFilePath}`);
  }
}

processBlogPosts().catch(console.error);
