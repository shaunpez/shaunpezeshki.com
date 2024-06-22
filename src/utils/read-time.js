
const calculateReadingTime = (text) => {
    const wordsPerMinute = 200; // Average reading speed of an adult (approx. 200-250 words per minute)
    const words = text.split(/\s+/).length; // Split by whitespace to count all words
    const readingTime = Math.ceil(words / wordsPerMinute);
    return `${readingTime} min read`;
  };
  
  export default calculateReadingTime;