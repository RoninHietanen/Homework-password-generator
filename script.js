// Assignment Code
var genBtn = document.querySelector('#generate');
var passText = document.querySelector('#password');
var passLength = document.querySelector('#length');
var passUpper = document.querySelector('#uppercase');
var passLower = document.querySelector('#lowercase');
var passNum = document.querySelector('#numbers');
var passSChar = document.querySelector('#specialchar');
var getpass = document.querySelector('#getpassword');

// Write password to the #password input
let arrayLow2High = (low, high) => {
  var array = [];
  for (let i = low; i <= high; i++){
    array.push(i);
  }
  return array;
};

var uppercase = arrayLow2High(65, 90);
var lowercase = arrayLow2High(97, 122);
var num = arrayLow2High(48, 57);
var schar = arrayLow2High(33, 47).concat(arrayLow2High(58, 64)).concat(arrayLow2High(91, 96)).concat(arrayLow2High(123, 126));

getpass.addEventListener('submit', (e) => {
  e.preventDefault();
  var characterAmount = passLength.value;
  var includeUppercase = passUpper.checked;
  var includeLowercase = passLower.checked;
  var includeNumbers = passNum.checked;
  var includeSymbols = passSChar.checked;
  var password = genPass(
    characterAmount,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
  passText.innerText = password;
});

let genPass = (
  characterAmount,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) => {}

if (includeUppercase) charCodes = charCodes.concat(uppercase);
if (includeLowercase) charCodes = charCodes.concat(lowercase);
if (includeSymbols) charCodes = charCodes.concat(num);
if (includeNumbers) charCodes = charCodes.concat(schar);




//var specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
//var upperCaseLetters = Math.random().toString(36).slice(2);
//var lowerCaseLetters = Math.random().toString(36).slice(2);
//var numbers = Math.floor(Math.random());
//for (i = 0; i < writePassword.length; i++) {
//  document.writePassword(generatePassword[i]).maxLength;
//  document.writePassword(writePassword()[i]).minLength;
//}