// Question 1
// Transform the word to uppercase and if it's the same word, return true
const isUpperCase = word => word === word.toUpperCase();

// Question 2
// Use .map() to transform each word to that word with the vowels removed
// To remove vowels, Use regex and replace vowels with the empty string
const removeVowels = array => array.map(word => word.replace(/[aeiuo]/gi, ''));

// Question 3
// Split the setence into an array of words
// Transform each word using .map() by uppercasing the first char
  // Do this by grabbing the first letter and uppercase it, and concatenate with
  // the rest of the string with .slice()
const wordCap = sentence => {
  const array = sentence.split(" ");
  return array.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
};

// Question 4
// Iterate through every letter
// Create an empty string to build up the solution
// If it matches a Uppercase letter using regex
  // Add the lowercase character to the string
// Otherwise, add the uppercase letter to the string
const swapCase = word => {
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
// Create an empty string to build the solution
// Iterate through every letter
// Keep track of whether the next char should be upper or lowercase and store that in a "flag" variable
  // If the current letter is a symbol or space
    // Append it to the string
  // If the current letter is a letter (use regex)
    // Append either upper or lowercase, AND switch the "flag" variable for next time
const staggeredCase = sentence => {
  let returnString = '';
  let upper = false;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].match(/[a-zA-Z]/)) {
      upper = !upper;
      if (upper) {
        returnString += sentence[i].toUpperCase();
      } else {
        returnString += sentence[i].toLowerCase();
      }
    } else {
      returnString += sentence[i];
    }
  }
  return returnString;
};

// Question 6
// Split the sentence into an array of words
// Map it to an array of word then number as a string
const wordLengths = (sentence = "") => {
  if (sentence.length === 0) {
    return [];
  }
  return sentence.split(" ").map(word => `${word} ${word.length}`);
};

// Question 7
// Create a regex to match the word case-insensitive
// Create a counter variable
// Split the sentence into an array of words, also good to remove punctuation from words
// Iterate through the array
  // If the word is a regex match
  // Increment the counter variable
const searchWord = (word, sentence) => {
  const regex = new RegExp(`^${word}$`, "i");
  const array = sentence.split(" ");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].replace(/[^a-z0-9-]/ig, '').match(regex)) {
      count += 1;
    }
  }
  return count;
};

// Question 8
// Create a regex to match the word case-insensitive
// Replace every pattern of the word with <strong>$1</strong> for the capture group
const highlightWord = (searchTerm, sentence) => {
  const regex = new RegExp(`(${searchTerm})`, "ig");
  return sentence.replace(regex, "<strong>$1</strong>");
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
