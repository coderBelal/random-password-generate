//select variable (start)
const passwordBox = document.getElementById("Password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklnmopqrstuvwxyz";
const symble = ")(*&^%$#@1{}<>";
const number = "0123456789";
const allChars = upperCase + lowerCase + symble + number;
//select variable (end)
// function for password create (start)
function createPassword() {
  let Password = "";
  Password += upperCase[Math.floor(Math.random() * upperCase.length)];
  Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  Password += number[Math.floor(Math.random() * number.length)];
  Password += symble[Math.floor(Math.random() * symble.length)];
  //loop while
  while (lenght > Password.length) {
    Password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  //loop while
  passwordBox.value = Password;
}

// function for password create (end)
function copyPassword() {
  if (passwordBox.value == false) {
    alert(" password box empty");
  }
  passwordBox.select();
  document.execCommand("copy");
}
