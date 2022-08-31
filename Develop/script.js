// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Generate password criteria
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;



space = [];
var choices;

function writePassword() {
    var generatedPassword = generatePassword();
    document.getElementById("password").textContent = generatedPassword;
}

function generatePassword() {
    //special characters
    var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
    // Numeric characters
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Alphabetical characters
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var alphabet2 = alphabet.map(x => x.toUpperCase());

    
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices = character.concat(number, alphabet, alphabet2);
    }
    
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphabet2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alphabet);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alphabet, alphabet2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alphabet, alphabet2);
    }
  
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alphabet);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphabet2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alphabet.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alphabet.concat(alphabet2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphabet2);
    }
    
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alphabet;
    }
    
    else if (confirmUppercase) {
        choices = space.concat(alphabet2);
    };

    
    var password = [];

    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    return ps;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
