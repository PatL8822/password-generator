/* 1. prompts for password criteria 
   2. select which criteria to include in password
   3. length of at least 8 characters,no more than 128 characters
   4. confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
   5. input should be validated and at least one character type should be selected
   6. password is generated that matches the selected criteria
   7.  password written to the page*/

// Assignment Code / char code const , array for pw holder and pw holder to set to HTML pg.
var generateBtn = document.querySelector("#generate");
const LOWERCASE_CHAR_CODES = arrayfromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayfromLowToHigh(65, 90);
const NUMBERS_CHAR_CODES = arrayfromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayfromLowToHigh(33, 47).concat(58, 64).concat(91, 96).concat(123, 126);
let code = []
var finalPass = []

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  passReset();

  // holds the character amount, keeps entry as num only , stops pw gen if the criteria is not met.
  var passWordLength = prompt("How many characters do you want? Min-8 Max-128");
  if (passWordLength < 8 || passWordLength > 128) {
    alert("Please enter a valid number")
  } else if (passWordLength === null) {
    alert('A password will not be generated.');
  } else if (isNaN(passWordLength) === true || passWordLength === '') {
    alert('Please use numerical numbers and try again.');
  } else {
    selectedCharacters()
  }

  // prompt specl. characters
  function selectedCharacters() {
    var specialYes = confirm('Click OK to include special characters in your password.');
    if (specialYes === true) {
      code = code.concat(SYMBOL_CHAR_CODES)
    }

    // prompt numbers
    var numericYes = confirm('Click OK to include numerical characters in your password.');
    if (numericYes === true) {
      code = code.concat(NUMBERS_CHAR_CODES)
    }

    //  prompt lower caracters
    var lowerYes = confirm('Click OK to include lowercase characters in your password.');
    if (lowerYes === true) {
      code = code.concat(LOWERCASE_CHAR_CODES)
    }

    // prompt upper characters
    var upperYes = confirm('Click OK to include uppercase characters in your password.');
    if (upperYes === true) {
      code = code.concat(UPPERCASE_CHAR_CODES)
    }

    //stops PW gen. if no caracters are selected
    if (upperYes === false && lowerYes === false && numericYes === false && specialYes === false) {
      alert('You must select at least one character type.');
    }
  }

  // looping through array for characters 
  for (let i = 0; i < passWordLength; i++) {
    var index = code[Math.floor(Math.random() * code.length)]
    finalPass.push(String.fromCharCode(index))
  }
  return finalPass.join('')

}

function passReset() {
  code.length = 0;
  finalPass.length = 0;
}

// looping through numbers from char code chart and setting them to the const. at top of page.
function arrayfromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}