# Problem Set 3.1
## Regular Expressions and String Processing

#### Use regular expressions, `String` prototype methods, and/or any of the other tools in your toolkit to solve the problems below:

1. Write a function that takes a string argument, and returns `true` if all of the alphabetic characters inside the string are uppercase; `false` otherwise. Ignore characters that are not alphabetic.

      ```javascript
      isUpperCase('t');               // false
      isUpperCase('T');               // true
      isUpperCase('Four Score');      // false
      isUpperCase('FOUR SCORE');      // true
      isUpperCase('4SCORE!');         // true
      isUpperCase('');                // true
      ```

2. Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).

      ```javascript
      removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
      removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
      removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
      ```

3. Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase. You may assume that a word is any sequence of non-whitespace characters.

      ```javascript
      wordCap('four score and seven');       // "Four Score And Seven"
      wordCap('the javaScript language');    // "The Javascript Language"
      wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
      ```

4. Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

      ```javascript
      swapCase('CamelCase');              // "cAMELcASE"
      swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"
      ```

5. Write a function that takes a string argument and returns that string with alternating cases for letter characters. The first letter character should be capitalized and subsequent letter characters will be alternating between lower and upper case. **Non-alphabetic characters should not be counted toward the alternation pattern.**

      ```javascript
      staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
      staggeredCase('ALL CAPS');                     // "AlL cApS"
      staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
      ```

6. Write a function that takes a string as an argument, and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array. You may assume that every pair of words in the string will be separated by a single space.

```javascript
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
```

7. Write a function that takes a word and a string of text as arguments, and returns an integer representing the number of times the word appears in the text. This function should count word matches even if the case does not match. You may assume that the word and text inputs will always be provided. You may assume that a word is any collection of characters separated by whitespace, `,`, `.`, `!`, or `?`.

```javascript
let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';

searchWord('his', text);      // 4 
searchWord('hip-hop', text);  // 1 (because "hip-hop's" !== "hip-hop")
searchWord('flow', text);           // 1
searchWord('is', text);           // 1
```

8. the function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and a string of text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with the `<strong>` HTML tag (e.g., `'<strong>his</strong>'`).

```javascript
let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';

highlightWord('his', text);

// 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for <strong>his</strong> quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. <strong>His</strong> signature authenticity shone throughout the 10-episode series and international audiences were drawn to <strong>his</strong> charisma as he proudly rapped about <strong>his</strong> lived experiences as a young black man in Inglewood.';

