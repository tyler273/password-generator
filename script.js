// Global variables
// possible password characters
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~","]",";"];
var minpasswordlength = 8;
var maxpasswordlength = 128;
var pool = [];
pool = pool.concat(lowercase, uppercase, numbers, special);

function generatePassword() {
  var numberOfCharacters = parseInt(prompt("How long do you want your password to be? (Must include a minimum of 8 characters to a maximum of 128 characters.)"));
  
  if(numberOfCharacters){
    if (password < minpasswordlength || password > maxpasswordlength);
  }
  
  
  
  var confirmuppercase = confirm ("Would you like your password to contain uppercase letters?");
  
  
  
  
  
  // console.log(typeof numberOfCharacters);
  for(var i = 0; i < numberOfCharacters; i++){
    password.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  
  console.log(password);
  // prompt("Do you want lowercase letters? Yes/No");
  // prompt("Do you want uppercase letters? Yes/No");
  // prompt("Do you want numbers? Yes/No");
  // prompt("Do you want special characters? Yes/No");
  // return password.join('-');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

