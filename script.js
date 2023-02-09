// Strings representing all options for password charachters
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special =[ '!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
// Strings will be added to this array based on the user's choices
var userChoiceArray =[]
// This function will allow for the user to decide perameters for their password
var messages = function() {
  passwordLength = prompt("Please enter the number of characters between 8-128")
  if (passwordLength < 8 || passwordLength> 128) {
    alert("Password length must be a number between 8 and 128")
    //Stops the messages if length is invalid
    return false
  } 
  if (confirm("Include lowercase letter?") === true) {
    userChoiceArray = userChoiceArray.concat(lowerCase)
  }
  if (confirm("Include uppercase letter?") === true) {
    userChoiceArray = userChoiceArray.concat(upperCase)
  }
  if (confirm("Include numbers?") === true) {
    userChoiceArray = userChoiceArray.concat(numbers)
  }
  if (confirm("Include special characters?") === true) {
    userChoiceArray = userChoiceArray.concat(special)
  } 
  else {
    alert("Please choose at least one perameter!")
  }
}





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
