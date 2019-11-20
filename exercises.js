const isUpperCase = str => !/[a-z]/.test(str);
isUpperCase('Four Score');  

const removeVowels = function(arr){
  return arr.map(vowel => vowel.replace(/[aeiou]/gi, ''));
};
removeVowels(['abcdefghijklmnopqrstuvwxyz']); 

const wordCap= function(str){
  let strArr = str.toLowerCase().split(' ');
  let result = strArr.map(word => {
   return word.replace(/^./, letter => letter.toUpperCase());
  });
  return result.join(' ');
};
wordCap('four score and seven');

const swapCase = function (str){
  let strArr = str.split('');
  let result = strArr.map(function(char){
    if(char.match(/[A-Z]/)) return char.toLowerCase();
    if(char.match(/[a-z]/)) return char.toUpperCase();
    return char
  });
  return result.join('');
}
 swapCase('CamelCase');



const staggeredCase = function(str){
  let newStr = '';
  let isLastLetterUpper = false;
  for (let i = 0; i < str.length; i++){
      if (str[i].match(/[a-zA-Z]/)) { // Test if the index of the string is a letter

        if (isLastLetterUpper) {   // If last letter is true add to newStr lowercase
          newStr += str[i].toLowerCase()
          isLastLetterUpper = false;
        } else {                  // If not add Upper
          newStr += str[i].toUpperCase(); 
          isLastLetterUpper = true;
        }

      } else {                    // Add to the string
        newStr += str[i];
      }
  }
  
    return newStr;
}

 staggeredCase('ignore 77 the 444 numbers');
 
 const wordLengths = function(word){
  if(word === undefined || word === '') return [];
  let wordArr = [];
  let splitWord = word.split(' ');
  splitWord.map(function(char){
    wordArr.push(`${char} ${char.length}`);
  });
  return wordArr;
} 
wordLengths('cow sheep chicken');

// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  // searchWord,
  // highlightWord,
};
