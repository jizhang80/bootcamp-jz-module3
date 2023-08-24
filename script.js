// Assignment code here
function getRandomNumber(numberRange) {
  return Math.floor(Math.random()*numberRange);
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
  
    if (this.hasLowercase) base = base + letters;
    if (this.hasUppercase) base = base + upperCaseLetters;
    if (this.hasNumeric)   base = base + numbers;
    if (this.hasSpecialChar) base = base + specialChar;
  
    for (let i = 0; i < this.pwLength; i++) {
      let idx = getRandomNumber(base.length);
      password = password + base[idx];
    }
    return password;
  }// end of getPassword()
}


function generatePassword() {
  // length 8 - 128
  passwordObj.pwLength = prompt("Length of the password, should be a number 8 - 128", 8);
  // if length is not a number or less than 8 or greater than 128, redo
  while (isNaN(passwordObj.pwLength) || // if pwLength is a number string, isNaN return false
        passwordObj.pwLength < 8 || 
        passwordObj.pwLength > 128) {
      passwordObj.pwLength = prompt("Length of the password, should be a number 8 - 128");
  }


  // lowercase 
  passwordObj.hasLowercase = confirm("Character Types: \nThe password has lowercase letter?");
  // uppercase 
  passwordObj.hasUppercase = confirm("Character Types: \nThe password has uppercase letter?");
  // numeric
  passwordObj.hasNumeric = confirm("Character Types: \nThe password has numeric?");
  // special characters
  passwordObj.hasSpecialChar = confirm("Character Types: \nThe password has special characters?");

  while (!passwordObj.hasLowercase && !passwordObj.hasUppercase &&
            !passwordObj.hasNumeric && !passwordObj.hasSpecialChar) {
    alert("Character Types: \n At least has one character type!")
    // lowercase 
    passwordObj.hasLowercase = confirm("Character Types: \nThe password has lowercase letter?");
    // uppercase 
    passwordObj.hasUppercase = confirm("Character Types: \nThe password has uppercase letter?");
    // numeric
    passwordObj.hasNumeric = confirm("Character Types: \nThe password has numeric?");
    // special characters
    passwordObj.hasSpecialChar = confirm("Character Types: \nThe password has special characters?");
  }
    // at least one option true, if all false, then repeat

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
