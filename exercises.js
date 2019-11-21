const wordLengths = (string) => { // Takes a string
  const sentence = string.split(' '); // Split string to array of words
  var finalArray = [];

  sentence.forEach((word, index) => {
    let splitWord = word.split('')
    finalArray[index] = `${splitWord.join('')}  ${splitWord.length}`;
    return finalArray;
  });
  

const searchWord = (word, text) => {
  let myText = text.split(' ');
  let wordOccurence = 0;
  let regex = new RegExp(`(${word})`, 'gi') // Create regex

  myText.forEach((char) => { // Iterate over myText check if any element matches word
    if(char.match(regex)) {
    wordOccurence = wordOccurence + 1;
    }
    return wordOccurence; 
  });
};

// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
  highlightWord,
};
