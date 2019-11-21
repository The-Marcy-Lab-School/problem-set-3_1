// Question 1
const isUpperCase = (str) => !/[a-z]/.test(str);

// Question 2
const removeVowels = (arr) => arr.map((word) => word.replace(/[aeiou]/gi, ''));

// Question 3
const wordCap = (sentence) => {
  const wordArr = sentence.toLowerCase().split(' ');
  return wordArr.map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
};

// Question 4
const swapCase = (sentence) => {
  const chars = sentence.split('');
  return chars.map((char) => {
    if (char.match(/[a-z]/)) return char.toUpperCase();
    if (char.match(/[A-Z]/)) return char.toLowerCase();
    return char;
  }).join('');
};

// Question 5
const staggeredCase = (sentence) => {
  let newStr = '';

  let lastLetterUpper = false;
  for (let letter of sentence) {
    if (letter.match(/[a-z]/i)) {
      lastLetterUpper ? newStr += letter.toLowerCase() : newStr += letter.toUpperCase();
      lastLetterUpper = !lastLetterUpper;
    } else {
      newStr += letter;
    }
  }

  return newStr;
};

// Question 6
const wordLengths = (sentence) => {
  if (sentence === undefined) return [];
  if (sentence.length === 0) return [];
  return sentence.split(' ').map((word) => `${word} ${word.length}`);
};

// Question 7
const searchWord = (term, text) => {
  const searchRegex = new RegExp(`\\b${term}\\b`, 'ig');
  const matches = text.match(searchRegex);
  return matches ? matches.length : 0;
};

// Question 8
const highlightWord = (term, text) => {
  const searchRegex = new RegExp(`\\b${term}\\b`, 'ig');
  return text.replace(searchRegex, (match) => `<strong>${match}</strong>`);
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
