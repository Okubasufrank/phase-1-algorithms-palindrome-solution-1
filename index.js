function isPalindrome(word) {
  // Write your algorithm here

  var reversed=reverse(word)
  if(reversed==word){
    return true
    console.log(true)
  }
  else{
    return false;
    console.log(false)

  }
}


function reverse(s) {
  return s.split('').reverse().join('');
}
/* 
  Add your pseudocode here
  STEP 1 :Take in the arguments
  STEP 2  :Reverse the parameter
  STEP 3 Compare the reversed with the original
  STEP 4 If it matches return true else return false
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