const wordLengths = (string) => { // Takes a string
  const sentence = string.split(' '); // Split string to array of words
  var finalArray = [];

  sentence.forEach((word, index) => {
    splitWord = word.split('')
    finalArray[index] = `${splitWord.join('')}  ${splitWord.length}`;
  });
  return finalArray
}

const searchWord = (word, text) => {
  let myText = text.split(' ');
  let wordOccurence = 0;
  let wordToSearch = word; // Assign word parameter for regex variable
  var flags = 'gi'; // Simple string with flags
  var regex = new RegExp(`(${wordToSearch})`, flags) // Create regex

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
