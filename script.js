/* 1. prompts for password criteria 
   2. select which criteria to include in password
   3. length of at least 8 characters,no more than 128 characters
   4. confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
   5. input should be validated and at least one character type should be selected
   6. password is generated that matches the selected criteria
   7.  password written to the page*/

// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = arryFromLowToHigh(65, 90);
var lowerCaseLetters = arryFromLowToHigh(97, 122);
var numbers = arryFromLowToHigh(48, 57);
var specialCharacters = arryFromLowToHigh(33, 47).concat(58, 64).concat(91, 96).concat(123, 126);

function generatePassword() {
  var passLength = prompt('Choose a password length between 8 and 128 characters.');
  console.log(passLength)
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

    var specialChar = confirm("Do you want to include special characters?");
    if(specialChar === true){
      return specialCharacters
    }
    console.log(specialChar)

    var numberSelect = prompt("Do you want to include numbers?")
    if(numberSelect === true){
      return numbers
    }
    console.log(numberSelect)

    var upperChar = confirm("Do you want to inclued uppercase letters?")
    if (upperChar === true){
      return upperCaseLetters
    }
    console.log(upperChar)

    var lowerChar = confirm("Do you want to include lowercase letters?")
    if (lowerChar === true){
      return lowerCaseLetters
    }
    console.log(lowerChar)
    
  }

 var charCodes = lowerChar
 if (upperChar) charCodes = charCodes.concat(upperCaseLetters)
 if (specialChar) charCodes = charCodes.concat(specialCharacters)
 if (numberSelect) charCodes = charCodes.concat(numbers)

 const passwordCharacters = []
 for (var i = 0; i < passLength; i++){
  const characters = charCodes[Math.floor(Math.random() * passLength)]
  passwordCharacters.push(String.fromCharCode(characters))
 }
 return passwordCharacters
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
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

