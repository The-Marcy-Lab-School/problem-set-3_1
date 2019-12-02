// Question 1
const isUpperCase = ((word) => {
  const wordArr = word.split('');
  return wordArr.every((letter)=>letter.match(/[A-Z0-9_! ]/));
});

// Question 2
const removeVowels = (arrStr)=>{
  return arrStr.map((char)=>{
    return char.replace(/[aeiou]/gi, '');
  });
};

// Question 3
const wordCap = (sentence) => {
  const sentArr = sentence.split(' ');
  const capArr = [];
  sentArr.forEach((word) => {
    if (word.match(/[a-z]/gi)) {
      capArr.push(word[0].toUpperCase() + word.substring(1, word.length).toLowerCase());
    }
    return word;
  });
  return capArr.join(' ');
};

// Question 4
const swapCase = (string) => {
  const strArr = string.split('');
  return strArr.map((letter)=>{
    if (letter.match(/[a-z]/g)){
      return letter.toUpperCase();
    }else{
      return letter.toLowerCase();
    }
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
const wordLengths = (string) => {
  if (string === '') return [];
  if (string === undefined) return [];
  return string.split(' ').map((word) => `${word} ${word.length}`);
};

// Question 7
const searchWord = (word, text)=>{
  let newRegEx = new RegExp(`\\b${word}\\b`, 'ig');
  let totalMatches = text.match(newRegEx);
  if (totalMatches){
    return totalMatches.length;
  }
  return 0;
};

const highlightWord = (word, text) => {
  let newRegEx = new RegExp(`\\b${word}\\b`, 'ig');
  return text.replace(newRegEx, (match) => `<strong>${match}</strong>`)
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
