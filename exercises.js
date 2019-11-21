// 1: true if all alphanums are caps. First one liner straight out my head!!
const isUpperCase = (word) => word === word.toUpperCase();

// 2: remove vowels
const removeVowels = (strngArr) => strngArr.map((word) => word.replace(/[aeiou]/gi, ''));

// 3: wordCap
function wordCap (phrase) {
  const wordsArr = phrase.toLowerCase().split(' ');
  return wordsArr.map((word) => word.replace(/./, word[0].toUpperCase())).join(' ');
}

// 4: swapCase
function swapCase (word) {
  const wordArr = word.split('');
  return wordArr.map((char) => {
    if (char.match(/[A-Z]/g)) {
      return char.toLowerCase();
    }
    return char.toUpperCase();
  }).join('');
}

// 5
function staggeredCase (phrase) {
  let finalStr = '';
  let prevCharCap = false;
  for (const char of phrase) {
    if (char.match(/[a-z]/i)) {
      if (prevCharCap === false) {
        finalStr += char.toUpperCase();
        prevCharCap = true;
      } else {
        finalStr += char.toLowerCase();
        prevCharCap = false;
      }
    } else {
      finalStr += char;
    }
  }
  return finalStr;
}

// 6
function wordLengths (phrase) {
  const finalArr = [];
  let intermediaryStr = '';
  if (!(phrase === undefined || phrase.length === 0)) {
    const wordsArr = phrase.split(' ');
    wordsArr.forEach((word) => {
      intermediaryStr += `${word} ${word.length}`;
      finalArr.push(intermediaryStr);
      intermediaryStr = '';
    });
  }
  return finalArr;
}

// 7
function searchWord (word, text) {
  const regex = new RegExp(`\\b${word}\\b`, 'ig');
  return text.match(regex) ? text.match(regex).length : 0;
}

// 8
function highlightWord (word, text) {
  const regex = new RegExp(`\\b${word}\\b`, 'ig');
  return text.replace(regex, (match) => `<strong>${match}</strong>`);
}

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
