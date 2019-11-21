const isUpperCase = (str) => !/[a-z]/.test(str);

const removeVowels = (arr) => arr.map((word) => word.replace(/[aeiou]/gi, ''));

const wordCap = (str) => {
  const arr = str.toLowerCase().split(' ');
  return arr.map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
};

const swapCase = (str) => {
  const ans = str.split('').map((letter) => (letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())).join('');
  return ans;
};

const staggeredCase = function(str) {
  let newStr = '';
  let isLastLetterUpper = false;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i].match(/[a-zA-Z]/)) { // Test if the index of the string is a letter
      if (isLastLetterUpper) { // If last letter is true add to newStr lowercase
        newStr += str[i].toLowerCase();
        isLastLetterUpper = false;
      } else { // If not add Upper
        newStr += str[i].toUpperCase();
        isLastLetterUpper = true;
      }
    } else { // Add to the string
      newStr += str[i];
    }
  }

  return newStr;
};

const wordLengths = (str) => {
  const arr = [];
  if (str === undefined || str.length === 0) return [];
  str.split(' ').forEach(((word) => arr.push(`${word} ${word.length}`)));
  return arr;
};

const searchWord = (word, text) => {
  const searchRegex = new RegExp(`\\b${word}\\b`, 'ig');
  const matches = text.match(searchRegex);
  return matches ? matches.length : 0;
};

const highlightWord = (word, text) => {
  const searchRegex = new RegExp(`\\b${word}\\b`, 'ig');
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
