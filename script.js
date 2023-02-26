// Assignment code here



// User Prompts

var userLength = prompt("how long will you like your password ");

var upperCase = prompt("Include upper");
if (upperCase === "yes") {
  upperCase = true;
} else upperCase = false;

var lowerCase = prompt("Include lower?");
if (lowerCase === "yes") {
  lowerCase = true;
} else lowerCase = false;

var userNumbers = prompt("include numbers?");
if (userNumbers === "yes") {
  userNumbers = true;
} else userNumbers = false;

var userSymbols = prompt("include symbols?");

if (userSymbols === "yes") {
  userSymbols = true;
} else userSymbols = false;

console.log("user Length", userLength);

console.log("upper case", upperCase);

console.log("lower case", lowerCase);

console.log("user Numbers ", userNumbers);

console.log("User Symbols", userSymbols);
// Prompts

//selection object
var randomSelection = {
  
  lower: getRandomLower,

  upper: getRandomUpper,

  number: getRandomNumber,

  symbol: getRandomSymbol,
};

// Generator Functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "~!@#$%^&*()_-+={[}]|\\:;\"'<>,.?/";

  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());

function generatePassword() {
  console.log("selection array ", selctionArray);
  // for (var i = 0, n = charset.length; i < userLength; ++i) {
  //     retVal += charset.charAt(Math.floor(Math.random() * n));
  // }
  // return retVal;
}

generatePassword();
// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
