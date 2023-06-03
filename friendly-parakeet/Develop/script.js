// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("Enter the length of the password (between 8 and 128 characters):");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  var characterTypes = {
    uppercase: confirm("Include uppercase letters?"),
    lowercase: confirm("Include lowercase letters?"),
    numbers: confirm("Include numbers?"),
    symbols: confirm("Include symbols?")
  };

  var characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
  };

  var selectedCharacters = Object.keys(characterTypes).filter(function(type) {
    return characterTypes[type];
  });

  if (selectedCharacters.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacterType = selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
    var randomCharacter = characters[randomCharacterType][Math.floor(Math.random() * characters[randomCharacterType].length)];
    password += randomCharacter;
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);