function splitTextIntoChunks(text, maxChunkSize = 4500) {
    const chunks = [];
    let currentChunk = '';
  
    const words = text.split(' ');
  
    words.forEach((word) => {
      if ((currentChunk + word).length > maxChunkSize) {
        chunks.push(currentChunk);
        currentChunk = '';
      }
      currentChunk += `${word} `;
    });
  
    if (currentChunk) {
      chunks.push(currentChunk.trim());
    }
  
    return chunks;
}
  
module.exports = splitTextIntoChunks;