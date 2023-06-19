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

// generate password based on criteria 
function getPrompts() {
  characterLength = parseInt(prompt("How long will your password be? (Choose between 8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please double check you are meeting the required criteria!");
    return false; 
  }

  if (confirm("Would you like lowercase letters?")) {
    choiceArray = choiceArray.concat(lowerCase);
  }
  if (confirm("Would you like uppercase letters?")) {
    choiceArray = choiceArray.concat(upperCase);
  }
  if (confirm("Would you like special characters?")) {
    choiceArray = choiceArray.concat(specialCharacters);
  }
  if (confirm("Would you like numbers?")) {
    choiceArray = choiceArray.concat(numbers);
  }
}





// 1. Prompt the user for password criteria.
//  password length between 8 to 128 characters
//  need lowercase, uppercase, numbers, & special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page