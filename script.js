// arrays of possible letter, number and character choices for password generator to pick from:
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var characters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '/', '<', '>', '?'];

// generate password button: user will click on this button and be greeted by prompts.
var generateBtn = document.querySelector("#generate");

// function that prompts the user with questions to cater their new password to their specified preference. 
function userQuestions() {
  // User must choose a length between 8 and 128 characters. If the user chooses a length lower or higher than said lengths, they will be alerted that the number is invalid.
  var length = parseInt(window.prompt("Welcome to my password generator! Please enter a password length between 8 and 128 characters to continue:"));
  if(length < 8 || length > 128) {
      alert("Invalid: Please enter a password length between 8 and 128 characters to continue:");
      return;
  }
  // To contine, user will be prompted with questions as to whether they would like lowercase or uppercase letters, numbers or characters in their password. User must click 'ok' or 'cancel' to each of the following prompts in order to move forward.
  var inputLowercase = confirm("Would you like your new password to contain lowercase letters?");
  var inputUppercase = confirm("Would you like your new password to contain uppercase letters?");
  var inputNumeric = confirm("Would you like your new password to contain numbers?");
  var inputCharacters = confirm("Would you like your new password to contain special characters?");
  // If user clicks 'cancel' to all of the above than an alert will appear letting them know they must choose at least one of the above criteria to move forward.
  if(!inputLowercase && !inputUppercase && !inputNumeric && !inputCharacters) {
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

// function that combines user choice's to generate new password.
function generatePassword() {
  var passwordOptions = userQuestions();
  var passwordCombo = [];
  var finalPassword = "";

  if(passwordOptions.inputLowercase) {
      for(var i of lowerCase)
      passwordCombo.push(i);
  }
  if(passwordOptions.inputUppercase) {
      for(var i of upperCase)
      passwordCombo.push(i);
  }
  if(passwordOptions.inputNumeric) {
      for(var i of numeric)
      passwordCombo.push(i);
  }
  if(passwordOptions.inputCharacters) {
      for(var i of characters)
      passwordCombo.push(i);
  }
  
  // logs password array combinations.
  console.log(passwordCombo);

  for (var i = 0; i < passwordOptions.length; i++) {
      finalPassword += passwordCombo[Math.floor(Math.random() * passwordCombo.length)];
  }
  // logs final password.
  console.log(finalPassword);
  return finalPassword;
}

// Write password to the #password input.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
