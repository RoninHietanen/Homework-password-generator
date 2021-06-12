// global variables
var genBtn = document.querySelector('#generate');
var passText = document.querySelector('#password');
var passLength = document.querySelector('#length');
var passUpper = document.querySelector('#uppercase');
var passLower = document.querySelector('#lowercase');
var passNum = document.querySelector('#numbers');
var passSChar = document.querySelector('#specialchar');
var getpass = document.querySelector('#getpassword');

// This is the function that randomises which characters are chosen
let arrayLow2High = (low, high) => {
  var array = [];
  for (let i = low; i <= high; i++){
    array.push(i);
  }
  return array;
};

// I chose to use ASCII and Unicode to get the different characters.
var uppercase = arrayLow2High(65, 90);
var lowercase = arrayLow2High(97, 122);
var num = arrayLow2High(48, 57);
var schar = arrayLow2High(33, 47).concat(arrayLow2High(58, 64)).concat(arrayLow2High(91, 96)).concat(arrayLow2High(123, 126));

// This is the event listener that is used to start the below fuction when the Generate Password button is clicked.
getpass.addEventListener('submit', (e) => {
  e.preventDefault();
  var characterAmount = passLength.value;
  var includeUppercase = passUpper.checked;
  var includeLowercase = passLower.checked;
  var includeNumbers = passNum.checked;
  var includeSymbols = passSChar.checked;
  var pass = genPass(
    characterAmount,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols
  );
  passText.innerText = pass;
});

// This is the function that generates the password.
let genPass = (
  passAmount,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = lowercase;
  if (includeUppercase) charCodes = charCodes.concat(uppercase);
  if (includeLowercase) charCodes = charCodes.concat(lowercase);
  if (includeNumbers) charCodes = charCodes.concat(schar);
  if (includeSymbols) charCodes = charCodes.concat(num);
  var password = [];
  for (let i = 0; i < passAmount; i++) {
    var passCode =
    charCodes[Math.floor(Math.random() * charCodes.length)];
    password.push(String.fromCharCode(passCode));
  }
  return password.join('');
};