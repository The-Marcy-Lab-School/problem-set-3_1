// Question 1
const isUpperCase = function(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
};

// Question 2
const removeVowels = function(word) {
  return word.map((element) => element.replace(/[aeiou]/gi, ''));
};

// Question 3
const wordCap = function(phrase) {
  const phraseArr = phrase.split(' ');
  return phraseArr.map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(' ');
};

// Question 4
const swapCase = function(phrase) {
  const phraseArr = phrase.split('');
  return phraseArr.map((char) => {
    if (char === char.toUpperCase()) return char.toLowerCase();
    return char.toUpperCase();
  }).join('');
};

// Question 5
const setCase = function(num, str) {
  if (num % 2 === 1) {
    return str.toUpperCase();
  }
  return str.toLowerCase();
};

const staggeredCase = function(phrase) {
  const wordArr = phrase.split(' '); // One string into an array of strings.
  let counter = 1; // The order. Dont mess with the order.
  const processedArr = []; // init array of finished words

  for (let i = 0; i < wordArr.length; i += 1) { // loop through each word
    let strHolder = ''; // init string that holds my processed chars

    for (let j = 0; j < wordArr[i].length; j += 1) { // loop through each char
      if (wordArr[i][j].match(/[a-z]/i)) { // check if its a letter
        strHolder += setCase(counter, wordArr[i][j]); // concat to holder after process
        counter += 1;
      } else {
        strHolder += wordArr[i][j];
      }
    }
    processedArr.push(strHolder); // add processed word to array
  }

  return processedArr.join(' ');
};

// Question 6
const wordLengths = function(sentence) {
  if (!sentence) return [];
  const sentenceArr = sentence.split(' ');
  if (sentenceArr.length === 0) return [];
  return sentenceArr.map((word) => `${word} ${word.length}`);
};


// Question 7
const searchWord = function(word, input) {
  const regexPattern = new RegExp(`\\b${word}\\b`, 'gi');
  const allInstances = input.match(regexPattern);
  return allInstances ? allInstances.length : 0;
};

// Question 8
const highlightWord = function(word, input) {
  const regexPattern = new RegExp(`\\b${word}\\b`, 'gi');
  return input.replace(regexPattern, (match) => `<strong>${match}</strong>`);
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
