// Assignment code here
function getRandomNumber(numberRange) {
  //return a random number in the range number
  return Math.floor(Math.random()*numberRange);
}

function getRandomChar(baseStr) {
  // return one of the random char of the baseStr
  let idx = getRandomNumber(baseStr.length);
  return baseStr[idx];
}

function swapArray(inputArray, idx) {
  // swap inputStr[idx] to the end
  if (inputArray.length > 1) {
    let temp = '';
    temp = inputArray[idx];
    inputArray[idx] = inputArray[inputArray.length-1];
    inputArray[inputArray.length-1] = temp;
  }
  return;
}

function shuffleStr(inputStr) {
  // shuffle input String
  let arr = inputStr.split('');
  let shuffledStr = '';
  while (arr.length > 0) {
    swapArray(arr, getRandomNumber(arr.length));
    shuffledStr += arr.pop();
  }
  return shuffledStr;
}

let passwordObj = {
  "pwLength": 8,
  "hasLowercase": true,
  "hasUppercase": true,
  "hasNumeric": true,
  "hasSpecialChar": true,
  getPassword() {
    let password = '';
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = "abcdefghijklmnoqprstuvwxyz";
    const numbers = "1234567890";
    const specialChar = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let base = '';
  
    // add charactor types to base string, 
    // and make sure at least one of the choosen type in the password
    if (this.hasLowercase) {
      base += letters;
      password += getRandomChar(letters);
    }
    if (this.hasUppercase) {
      base += upperCaseLetters;
      password += getRandomChar(upperCaseLetters);
    }
    if (this.hasNumeric) {
      base += numbers;
      password += getRandomChar(numbers);
    }  
    if (this.hasSpecialChar) {
      base += specialChar;
      password += getRandomChar(specialChar);
    }
    
    let rest = this.pwLength - password.length
    for (let i = 0; i < rest; i++) {
      password += getRandomChar(base);
    }

    //shuffle final password
    return shuffleStr(password);
  },// end of getPassword()

  askCharacterTypesQuestion() {
    // lowercase 
    this.hasLowercase = confirm("Character Types: \nThe password has lowercase letter?");
    // uppercase 
    this.hasUppercase = confirm("Character Types: \nThe password has uppercase letter?");
    // numeric
    this.hasNumeric = confirm("Character Types: \nThe password has numeric?");
    // special characters
    this.hasSpecialChar = confirm("Character Types: \nThe password has special characters?");
    return;
  }
}


function generatePassword() {
  // length 8 - 128
  do {
    passwordObj.pwLength = prompt("Length of the password, should be a number 8 - 128", 8);
    // if length is not a number or less than 8 or greater than 128, redo
   } while (isNaN(passwordObj.pwLength) || // if pwLength is a number string, isNaN return false
        passwordObj.pwLength < 8 || 
        passwordObj.pwLength > 128) 
  
  // ask character types question
  let j = 0;
  do {
    if (j > 0) {
      // if type error, then alert
      alert("Character Types: \n At least has one character type!")
    }
    passwordObj.askCharacterTypesQuestion();
    j++;
  } while (!passwordObj.hasLowercase && !passwordObj.hasUppercase &&
            !passwordObj.hasNumeric && !passwordObj.hasSpecialChar)
    // at least one option true, if all false, then alert & repeat

  return passwordObj.getPassword();
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
