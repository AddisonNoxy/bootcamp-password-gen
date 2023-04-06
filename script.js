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

function generatePassword() {
  //Create variables for password paraemeters
  var passLength = "";
  var hasLowercase = false;
  var hasUppercase = false;
  var hasSymbols = false;
  var hasNumbers = false;

  var passInput = "";
  var lowerInput = "";
  var upperInput = "";
  var symbolInput = "";
  var numberInput = "";

  passInput = prompt("Enter a length between 8 and 128 characters.");
  passLength = passInput.replace(/\D/g,''); //removes all non-digit characters from the input string

  //Compares the user input to the digit-only string, to check if extra characters were submitted
  if (passLength.length != passInput.length) {
    alert("Input must be only numbers!");
    return "Invalid password.";
  }

  passLength = Number(passLength); //convert the string to an integer

  //Checks if the user input is between 8 and 128 characters
  if (passLength < 7 || passLength > 128) {
    alert("Input must be between 8 and 128 characters.");
    return "Invalid password.";
  }

  //Prompt user for password criteria and check if it's a valid response
  lowerInput = prompt("Include lowercase letters? Type Y or N.");
  hasLowercase = checkInput(lowerInput);

  upperInput = prompt("Include uppercase letters? Type Y or N.");
  hasUppercase = checkInput(upperInput);

  symbolInput = prompt("Include symbols? Type Y or N.");
  hasSymbols = checkInput(symbolInput);
  
  numberInput = prompt("Include numbers? Type Y or N.");
  hasNumbers = checkInput(numberInput);
  
  let passString = ""; //generate an empty string for the password

  //assign available characters based on user input
  var characters = "";
  if (hasLowercase) {
    characters = characters.concat("abcdefghijklmnopqrstuvwxyz");
  }
  if (hasUppercase) {
    characters = characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (hasSymbols) {
    characters = characters.concat("!@#$%^&*()+-._?[]");
  }
  if (hasNumbers) {
    characters = characters.concat("1234567890");
  }
  console.log(characters + " are valid!");

  ///^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g

  
  for (i = 0; i < passLength; i++) {
    let randomChar = Math.floor(Math.random() * characters.length); //choose a random available character
    passString = passString.concat(characters.slice(randomChar, randomChar + 1)); //add the chosen character to the prototype string
    console.log(passString);
  }

  return passString; //returns the finished password

}

//Checks user input to the prompts, recursively prompts the user if an incorrect response is given
function checkInput(userInput) {
  console.log("Checking password!");
  if (userInput == "Y") {
    return true;
  } else if (userInput == "N") {
    return false;
  } else {
    alert("Error, invalid selection.");
    userInput = prompt("Please type Y or N.");
    return checkInput(userInput);
  }
}