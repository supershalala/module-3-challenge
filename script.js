// Assignment code here

/*
prompt
Character length between 8 and 180
lower, upper, numeric and or special characters 
*/

var randomSelection = {
  lower: getRandomLower,

  upper: getRandomUpper,

  number: getRandomNumber,

  symbol: getRandomSymbol,
}



// Generator Functions 

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}

function getRandomSymbol () {
  var symbols = "~!@#$%^&*()_-+={[}]|\\:;\"'<>,.?/"; 

  return symbols[Math.floor(Math.random()* symbols.length)];
}

console.log (getRandomLower ()) 



function generatePassword() {

  // aske user for length
  var userLength = prompt("how long will you like your password ");
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";

      var userCase = prompt ("Enter upper, lower or mixed") 

  for (var i = 0, n = charset.length; i < userLength; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}


generatePassword ();

console.log (retVal)





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
