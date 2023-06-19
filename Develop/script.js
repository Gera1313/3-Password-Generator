// Creating my variables
var characterLength = 8;
var choiceArray = [];

var specialCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '/', ':', ';', ';', '<', '=', '>', '?', '@'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

}







// 1. Prompt the user for password criteria.
//  password length between 8 to 128 characters
//  need lowercase, uppercase, numbers, & special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page