// Question 1
const isUpperCase = (word) => {
  return word === word.toUpperCase();
};

// Question 2
const removeVowels = (array) => {
  return array.map(word => word.replace(/[aeiuo]/gi, ''));
};

// Question 3
const wordCap = (sentence) => {
  const array = sentence.split(" ");
  return array.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

// Question 4
const swapCase = (word) => {
  let returnString = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[a-z]/)) {
      returnString += word[i].toUpperCase();
    } else {
      returnString += word[i].toLowerCase();
    }
  }
  return returnString;
};

// Question 5
const staggeredCase = (sentence) => {
  let returnString = '';
  let upper = false;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].match(/[a-zA-Z]/)) {
      upper = !upper;
      if(upper){
        returnString += sentence[i].toUpperCase()
      } else {
        returnString += sentence[i].toLowerCase()
      }
    } else {
      returnString += sentence[i];
    }
  }
  return returnString
};

// Question 6
const wordLengths = (sentence = "") => {
  if(sentence.length === 0){
    return [];
  }
  return sentence.split(" ").map(word => `${word} ${word.length}`);
};

// Question 7
const searchWord = (word, sentence) => {
  let regex = new RegExp(`^${word}$`, "i")
  const array = sentence.split(" ")
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if(array[i].replace(/\W/g, '').match(regex)){
      count += 1;
    }
  }
  return count;
};

// Question 8
const highlightWord = (word, sentence) => {
  let regex = new RegExp(`^(${word})$`, "i");
  const array = sentence.split(" ")
  return array.map(word => {
    if (word.match(regex)) {
      return word.replace(regex, "<strong>$1</strong>")
    } else { 
      return word 
    }
  }).join(" ")
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
