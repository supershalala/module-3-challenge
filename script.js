// 3  create password

//  4 display password
// return "this will be your password"

function generatePassword() {
  console.log("You've clicked the generate password button");

  // 1. User Prompts for password criteria

  // a)password length is number between 8 and 128

  var userLength = +prompt("Character length of password: Min 8 Max 128 ");
  if (userLength >= 8 && userLength <= 129) {
    console.log("User Length selected ", userLength);
  } else {
    alert("Please only pick between 8 and 128 characters!");
    return; // exit the function - valodates input
  }

  var upperCase = confirm("Include upper");
  if (upperCase) {
    console.log("user chose to use uppercase", upperCase);
  } else {
    console.log("user chose no uppar case letters", upperCase);
  }

  var lowerCase = confirm("Include lowercase letters?");
  if (lowerCase) {
    console.log("user chose to use lowercase", lowerCase);
  } else {
    console.log("user chose no lowercase letters", lowerCase);
  }

  var userNumbers = confirm("Use numbers");
  if (userNumbers) {
    console.log("user chose to use lowercase", userNumbers);
  } else {
    console.log("user chose no lowercase letters", userNumbers);
  }
  var userSymbols = confirm("Use symbols?");
  if (userSymbols) {
    console.log("user chose to use lowercase", userSymbols);
  } else {
    console.log("user chose no lowercase letters", userSymbols);
  }






  
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
