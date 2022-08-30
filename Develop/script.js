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

  if (password.special.includes(charType)) {
    passwordText.value = password.special;
  } else if (password.numeric.includes(charType)) {
    passwordText.value = password.numeric;
  } else if (password.uppercase.includes(charType)) {
    passwordText.value = password.uppercase;
  }
  else {
    passwordText.value = password.lowercase;
  }
}


function generatePassword() {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  return charSets;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









// Assignment code here


// Get references to the #generate element- starter code
var generateBtn = document.querySelector("#generate");

//Variables to call functions- my code
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




// Write password to the #password input-starter code
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button-starter code
generateBtn.addEventListener("click", writePassword);
