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

const randomFunc = {
  lower: getRandomLower,

  upper: getRandomUpper,

  number: getRandomNumber,

  symbol: getRandomSymbol,
};

// Function object 

function generatePassword(randomFunc) {
  console.log("You've clicked the generate password button");

  // 1. User Prompts for password criteria

  // a)password length is number between 8 and 128

  var errorMessage = "Please Click the Generate Button Password button to start again!"

  var userLength = +prompt("Character length of password: Min 8 Max 128 ");
  if (userLength >= 8 && userLength <= 128) {
    console.log("User Length selected ", userLength);
  } else {
    alert("Please only pick between 8 and 128 characters!");
    return errorMessage; // b) exit the function - valodates input
  }

  var upperCase = confirm("Include uppercase characters?");
  if (upperCase) {
    console.log("user chose to use uppercase", upperCase);
  } else {
    console.log("user chose no uppar case letters");
  }

  var lowerCase = confirm("Include lowercase characters?");
  if (lowerCase) {
    console.log("user chose to use lowercase", lowerCase);
  } else {
    console.log("user chose no lowercase letters");
  }

  var userNumbers = confirm("Use number characters?");
  if (userNumbers) {
    console.log("user chose to use numbers", userNumbers);
  } else {
    console.log("user chose no numberss");
  }
  var userSymbols = confirm("Use special characters?");
  if (userSymbols) {
    console.log("user chose to use special characters", userSymbols);
  } else {
    console.log("user chose no lowercase special characters");
  }


  var typesCount = lowerCase + upperCase + userNumbers + userSymbols;
    
  console.log("types count ", typesCount);

  var typesArray = [
    { name: "lower", include: lowerCase },
    { name: "upper", include: upperCase },
    { name: "number", include: userNumbers },
    { name: "symbol", include: userSymbols },
  ];
  console.log ("types array " , typesArray)
// 2) Create the password 

  // Declare variable for generated password
  var generatedPassword = '';



// iteration loop 
for (let i=0; i<userLength; i+=typesCount) {
  typesArray.forEach(type => {
    if (type.include) {
      generatedPassword += randomFunc[type.name]();
    }
  });

}


const finalPassword = generatedPassword.slice(0, userLength);
return finalPassword;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // had to pass through randomFunc object through generatepassword
  var password = generatePassword(randomFunc);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
