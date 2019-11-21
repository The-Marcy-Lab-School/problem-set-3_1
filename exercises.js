const isUpperCase = (str) => !/[a-z]/.test(str);
isUpperCase('Four Score');

const removeVowels = function(arr) {
  return arr.map((vowel) => vowel.replace(/[aeiou]/gi, ''));
};
removeVowels(['abcdefghijklmnopqrstuvwxyz']);

const wordCap = function(str) {
  const strArr = str.toLowerCase().split(' ');
  const result = strArr.map((word) => word.replace(/^./, (letter) => letter.toUpperCase()));
  return result.join(' ');
};
wordCap('four score and seven');

const swapCase = function (str) {
  const strArr = str.split('');
  const result = strArr.map((char) => {
    if (char.match(/[A-Z]/)) return char.toLowerCase();
    if (char.match(/[a-z]/)) return char.toUpperCase();
    return char;
  });
  return result.join('');
};
swapCase('CamelCase');


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

staggeredCase('ignore 77 the 444 numbers');

const wordLengths = function(word) {
  if (word === undefined || word === '') return [];
  return word.split(' ').map((char) => `${char} ${char.length}`);
};
wordLengths('cow sheep chicken');

const searchWord = function(word, text) {
  const searchRegex = new RegExp(`\\b${word}\\b`, 'ig');
  const match = text.match(searchRegex);
  return match ? match.length : 0;
};
const highlightWord = function(word, text) {
  const searchRegex = new RegExp(`\\b${word}\\b`, 'ig');
  return text.replace(searchRegex, (input) => `<strong>${input}</strong>`);
};

const text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';
searchWord('his', text);
highlightWord('his', text);


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
