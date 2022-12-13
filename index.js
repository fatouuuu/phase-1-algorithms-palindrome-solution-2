function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // compare the letter we're iterating over to the corresponding letter at the end of the string
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      // if the letters don't match, return false
      return false;
    }
  }
  // if we reach the middle, and all the letters match, return true
  return true;
}

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false
    if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here
  SOLUTION 2: (using a for loop)
  `isPalindrome` function returns either true or false. when the input 
  string is the same forwards and backwards, it should return true.
  if the 1st letter is the same as the last letter, and the 2nd letter is the 
  same as the 2nd to last, and so on until the middle of the word, the 
  function should return true. if not, it should return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
