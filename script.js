// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log( "You clicked the botton")
  
  // 1. prompts for password criteria
  

  // 2. select which criteria to include in password

  
  // 3. length of at least 8 characters,no more than 128 characters

  
  // 4. confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  
  // 5. input should be validated and at least one character type should be selected

  
  // 6. password is generated that matches the selected criteria


  // 7.  password written to the page

  return "working on it"

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

