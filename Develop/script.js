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







// 1. Prompt the user for password criteria.
//  password length between 8 to 128 characters
//  need lowercase, uppercase, numbers, & special characters
// 2. Validate the input
// 3. Generate password based on criteria
// 4. Display password to the page