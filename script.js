/* 1. prompts for password criteria 
   2. select which criteria to include in password
   3. length of at least 8 characters,no more than 128 characters
   4. confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
   5. input should be validated and at least one character type should be selected
   6. password is generated that matches the selected criteria
   7.  password written to the page*/

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var passLength = prompt('Choose a password length between 8 and 128 characters.');
  if (passLength < 8 || passLength > 128) {
    alert("Invalid information. Please enter the correct information.")
  } else if (passLength === null) {
    alert('A password will not be generated.');
  } else if (isNaN(passLength) === true || passLength === '') {
    alert('Please use numerical numbers and try again.');
  }
  else {
    characterSelect()
  }

  function characterSelect(){
    var specialChar = confirm("Do you want special characters?");
    if(specialChar === true){

    }
  }

  passwordText.value = password;

}

function generatePassword() {
  String.fromCharCode(65) 
}

function arryFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

