


function generatePassword () {
console.log ("You've clicked the generate password button")

// 1. User Prompts for password criteria

// a)password length is nuber between 8 and 128

// b)confirm, lower, upper, numbers, special characters

// validate the input - at least one has to be selected if not. exit function 

// create password

// display password 


return "this will be your password"

}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);