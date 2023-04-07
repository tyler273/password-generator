// Global variables
// possible password characters
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~","]",";"];
var minpasswordlength = 8;
var maxpasswordlength = 128;
var pool = [];
var password = [];


function generatePassword() {
  var numberOfCharacters = parseInt(prompt("How long do you want your password to be? (Must include a minimum of 8 characters to a maximum of 128 characters.)"));
  console.log(numberOfCharacters);
  if(!numberOfCharacters){
   window.alert("Please enter a number of desired characters");
   return
  }
  
  if (numberOfCharacters < 8 || numberOfCharacters > 128){
    console.log("Bad password");
    window.alert("Not a valid amount of characters. Please pick between 8 and 128 characters for your password.");
    generatePassword();
  }

  var confirmuppercase = confirm ("Would you like your password to contain uppercase letters? \n (OK = yes, Cancel = no)");
  console.log(confirmuppercase, "Confirm uppercase");
  var confirmlowercase = confirm ("Would you like your password to contain lowercase letters? \n (OK = yes, Cancel = no)");
  console.log(confirmlowercase, "Confirm lowercase");
  var confirmnumbers = confirm ("Would you like your password to contain numbers? \n (OK = yes, Cancel = no)");
  console.log(confirmnumbers, "Confirm numbers");
  var confirmspecial = confirm ("Would you like your password to contain special characters? \n (OK = yes, Cancel = no)");
  console.log(confirmspecial, "Confirm special characters");

// if statements to pull from arrays

  if(confirmuppercase === true){
    console.log("Before ",pool)
    pool = pool.concat(uppercase)
    console.log("After ",pool)
  }
  
  if(confirmlowercase === true){
    console.log("Before ",pool)
    pool = pool.concat(lowercase)
    console.log("After ",pool)
  }

  if(confirmnumbers === true){
    console.log("Before ",pool)
    pool = pool.concat(numbers)
    console.log("After ",pool)
  }

  if(confirmspecial === true){
    console.log("Before ",pool)
    pool = pool.concat(special)
    console.log("After ",pool)
  }
  
  for(var i = 0; i < numberOfCharacters; i++){
    // console.log(pool[Math.floor(Math.random() * pool.length)]);
    password.push(pool[Math.floor(Math.random() * pool.length)]);
  }
  return password.join('')
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

