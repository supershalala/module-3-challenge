// Assignment code here

// User Prompts
function userPrompts() {
  var userLength = +prompt("how long will you like your password ");

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

  console.log(
    "Length ",
    userLength,
    "upperCase ",
    upperCase,
    "lowercase ",
    lowerCase,
    "numbers ",
    userNumbers,
    "symbols ",
    userSymbols
  );
      generatePassword (lowerCase, upperCase, userLength, userNumbers, userSymbols);
}

//selection object
const randomFunc = {
  lower: getRandomLower,

  upper: getRandomUpper,

  number: getRandomNumber,

  symbol: getRandomSymbol,
};


// generate password 

function generatePassword (lowerCase, upperCase, userLength, userNumbers, userSymbols ) {



let generatedPassword = " ";

var typesCount = lowerCase + upperCase + userNumbers + userSymbols;

console.log("types count ", typesCount);

var typesArr = [
  { lower: lowerCase },
  { upper: upperCase },
  { number: userNumbers },
  { symbol: userSymbols },
].filter((item) => Object.values(item)[0]);

console.log("types array ", typesArr);

for (let i = 0; i < userLength; i += typesCount) {
  typesArr.forEach((type) => {
    const funcName = Object.keys(type)[0];

    console.log("func name ", funcName);
    console.log("randomFunc[funcName]", randomFunc[funcName]);
    generatedPassword += randomFunc[funcName]();
    console.log("random selection ", randomFunc);
  });
console.log ("generated password ", generatePassword)
 
}





}

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


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
