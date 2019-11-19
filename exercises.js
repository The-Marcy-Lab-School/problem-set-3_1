const isUpperCase = (word) => /^[A-Z]/.test(word);
const removeVowels = (word) => word.join(" ").replace(/[aeiou]/g, "").split(" ");

const wordCap= (str) =>{
  return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
};

const swapCase= (str) =>{
  let ans = str.split('').map((letter) =>
    letter === letter.toUpperCase() ? letter.toLowerCase(): letter.toUpperCase()).join('');
      return ans;
};

const staggeredCase = (str) =>{
    return str.replace(/.{2}/g, function(letter) {
        return letter[0].toUpperCase() + letter[1].toLowerCase();
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
