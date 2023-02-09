// Strings representing all options for password charachters
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special =[ '!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];
// Strings will be added to this array based on the user's choices
var userChoiceArray =[]

var messages = function() {
  passwordLength = prompt("Please enter the number of characters between 8-128")
  if (passwordLength < 8 || passwordLength> 128) {
    alert("Password length must be a number between 8 and 128")
  } 
  confirm("Include lowercase letter?")

}






console.log(messages)


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
