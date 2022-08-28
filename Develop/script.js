// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Generate password criteria
var length = Number(prompt("Enter a password length between 8 and 128")),
  charType = prompt("Enter a character type: special, numeric, uppercase, lowercase."),
  password = generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

