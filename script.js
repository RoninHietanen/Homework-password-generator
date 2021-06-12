// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  var upperCaseLetters = Math.random().toString(36).slice(2);
  var lowerCaseLetters = Math.random().toString(36).slice(2);
  var passwordText = document.querySelector("#password");
  var numbers = Math.floor(Math.random());

  if () {
    
  }
}

console.log(generatePassword())

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword());



//javascript:(
//  function(){
//      prompt('Here is your shiny new password:', 
//          Math.random().toString(36).slice(2) + 
//          Math.random().toString(36).slice(2)
//      );
//  }
//)();

//function password_generator( len ) {
//  var length = (len)?(len):(10);
//  var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
//  var numeric = '0123456789';
//  var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
//  var password = "";
//  var character = "";
//  var crunch = true;
//  while( password.length<length ) {
//      entity1 = Math.ceil(string.length * Math.random()*Math.random());
//      entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
//      entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
//      hold = string.charAt( entity1 );
//      hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
//      character += hold;
//      character += numeric.charAt( entity2 );
//      character += punctuation.charAt( entity3 );
//      password = character;
//  }
//  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
//  return password.substr(0,len);
//}
//console.log( password_generator() );