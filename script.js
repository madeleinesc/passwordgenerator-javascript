// arrays of possible letter/numeric/character choices for password generator to pick from:
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var characters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '/', '<', '>', '?'];


// generate password button
var generateBtn = document.querySelector("#generate");
//function requires user input before a new password is generated.
function generatePassword() {
  //when user clicks generate password button, a window will appear and prompt them to choose a password length between two numbers. 
  var length = parseInt(window.prompt("Welcome to my password generator! Please enter a password length between 8 and 128 characters to continue:"));
  //if the user chooses a length lower than 8 or higher than 128, they will be alerted that the number is invalid and that they must pick a number between said lengths.
  if (length < 8 || length > 128) {
    alert("Invalid: Please enter a password length between 8 and 128 characters to continue:");
    return;
  }

  //User will be asked whether they would like lowercase/uppercase letters, numbers or characters in their password. User must click 'ok' or 'cancel' to each of the following prompts in order to move forward.
  var inputLowercase = confirm("Would you like your new password to contain lowercase letters?");
  var inputUppercase = confirm("Would you like your new password to contain uppercase letters?");
  var inputNumeric = confirm("Would you like your new password to contain numbers?");
  var inputCharacters = confirm("Would you like your new password to contain special characters?");

  //if user clicks 'cancel' to all of the above than an alert will appear letting them know they must choose one of the criteria to move forward. 
  if (!inputLowercase && !inputUppercase && !inputNumeric && !inputCharacters) {
    alert("Invalid: You must choose at least one option to meet minimum criteria for password to be generated!");
    return;
  }
  var userChoice = {
    length: length,
    inputLowercase: inputLowercase,
    inputUppercase: inputUppercase,
    inputNumeric: inputNumeric,
    inputCharacters: inputCharacters,
  }
  return userChoice;

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
