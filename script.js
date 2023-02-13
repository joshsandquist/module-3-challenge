// Strings representing all options for password charachters
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special =[ '!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
// Strings will be added to this array based on the user's choices
var userChoiceArray =[]
// This function will allow for the user to decide perameters for their password
var messages = function() {
  userChoiceArray = []
  passwordLength = prompt("Please enter a number between 8-128 for password length")
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128")
    //Stops the messages if length is invalid or not a number
    return false
  } 
    //Adds user's criteria choices into blank userChoiceArray if true
  if (confirm("Include lowercase letters?") === true) {
    userChoiceArray = userChoiceArray.concat(lowerCase)
  }
  if (confirm("Include uppercase letters?") === true) {
    userChoiceArray = userChoiceArray.concat(upperCase)
  }
  if (confirm("Include numbers?") === true) {
    userChoiceArray = userChoiceArray.concat(numbers)
  }
  if (confirm("Include special characters?") === true) {
    userChoiceArray = userChoiceArray.concat(special)
  }  
 // If no choices are selected, the user will be alerted to select at least one perameter
  if (userChoiceArray.length === 0) {
    alert("Please choose at least one perameter!")
    return false
  }
  return true 

}

//Code to pick random characters from user's choice array
var generatePassword = function() {
  //resets password each time the user presses the button
  var password = ""
  for(var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * userChoiceArray.length)
    password = password + userChoiceArray[random]
  }
  return password
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var messageCheck = messages();
  var passwordText = document.querySelector("#password");
  // only runs the password generator if the message check is true
  if(messageCheck) {
  var newPassword = generatePassword();
  passwordText.value = newPassword}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
