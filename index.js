function isPalindrome(word) {
  // Write your algorithm here
  let toArr = word.split("")
  let flip = toArr.reverse()
  let joined = flip.join("")
  if (word === joined) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  split the string of words into an array of letters
  reverse the array
  join the array into string
  test strict equality between input and output
*/

/*
  Add written explanation of your solution here
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
