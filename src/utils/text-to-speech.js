// src/utils/text-to-speech.js
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const path = require('path');
const splitTextIntoChunks = require('./text-splitter');

const client = new textToSpeech.TextToSpeechClient({
  keyFilename: path.resolve(__dirname, '../../z_google/service-google-key.json'), // Adjusted path
});

async function synthesizeSpeech(text, slug) {
  const chunks = splitTextIntoChunks(text);
  const writeFile = util.promisify(fs.writeFile);
  const fileName = path.resolve(__dirname, '../../static/audio', `${slug}.mp3`);
  const tempFiles = [];

  for (let i = 0; i < chunks.length; i++) {
    const request = {
      input: { text: chunks[i] },
      voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
      audioConfig: { audioEncoding: 'MP3' },
    };

    const [response] = await client.synthesizeSpeech(request);
    const tempFileName = path.resolve(__dirname, '../../static/audio', `temp_${i}.mp3`); // Adjusted path
    await writeFile(tempFileName, response.audioContent, 'binary');
    tempFiles.push(tempFileName);
    console.log(`Audio content written to file: ${tempFileName}`);
  }

  const finalFileStream = fs.createWriteStream(fileName);
  return new Promise((resolve, reject) => {
    let index = 0;

    const appendFile = () => {
      if (index < tempFiles.length) {
        const tempFile = tempFiles[index];
        const tempFileStream = fs.createReadStream(tempFile);

        tempFileStream.pipe(finalFileStream, { end: false });

        tempFileStream.on('end', () => {
          index++;
          fs.unlinkSync(tempFile); // Remove temporary file
          appendFile(); // Process next file
        });

        tempFileStream.on('error', (err) => {
          reject(err);
        });
      } else {
        finalFileStream.end(); // End the final stream after all chunks are appended
      }
    };

    finalFileStream.on('finish', () => {
      resolve(fileName);
    });

    finalFileStream.on('error', (err) => {
      reject(err);
    });

    appendFile(); // Start the file appending process
  });
}

module.exports = { synthesizeSpeech };
