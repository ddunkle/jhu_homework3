// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate the password according to the user prompts
function generatePassword() {

    // Declaration of the needed variables. 
    var valid = false;
    var pwLength, lowerCase, upperCase, numeric, special;
    var pwArray = [];
    var password = "";
    var pwChar;
    var lcArray, ucArray, numArray, speArray;

    // While loop to capture how many characters the password should be.
    // If an invalid response is entered, the user will be promped to reenter a valid number. 
    while (valid === false) {
      pwLength = prompt("How many characters would you like to include?");
      if (pwLength >= 8 && pwLength <= 128) {
        valid = true;
      } else {
        alert("The length must be between 8 and 128 characters.");
      }
    }
  
    // Resetting the valid condition to false
    valid = false;

    // While loop to capture the user's wishes for building the password. 
    // If no choices are selected, it will prompt the user to go through the cycle again.
    while (valid === false) {
      // User prompts for each type of character
      lowerCase = confirm("Do you want to include LOWERCASE characters?");
      upperCase = confirm("Do you want to include UPPERCASE characters?");
      numeric = confirm("Do you want to include NUMERIC characters?");
      special = confirm("Do you want to include SPECIAL characters?");

      // If lowercase chars are requested, they are added to the pwArray options. 
      if (lowerCase) {
        lcArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        for (var i = 0; i < lcArray.length; i++) {
          pwArray.push(lcArray[i]);
        }
      }

      // If uppercase chars are requested, they are added to the pwArray options. 
      if (upperCase) {
        ucArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        for (var i = 0; i < ucArray.length; i++) {
          pwArray.push(ucArray[i]);
        }
      }

      // If numeric chars are requested, they are added to the pwArray options. 
      if (numeric) {
        numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; 
        for (var i = 0; i < numArray.length; i++) {
          pwArray.push(numArray[i]);
        }
      
      }

      // If special chars are requested, they are added to the pwArray options. 
      if (special) {
        speArray = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
        for (var i = 0; i < speArray.length; i++) {
          pwArray.push(speArray[i]);
        }
      }

      // If at least one set of characters have been added, then the while loop will end. 
      // Otherwise, the user will need to go back through the while loop. 
      if (pwArray.length > 0) {
        valid = true;
      } else {
        alert("You did not select any characters.");
      }
    }

    // For loop to generate the password. Each time through the loop it will call on the random number generator
    // to assign a element of the pwArray to the password. 
    for (var i = 0; i < pwLength; i++) {
      pwChar = Math.floor(Math.random()*pwArray.length);
      password = password + pwArray[pwChar];
    }

    // The password is returned to the calling function. 
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
