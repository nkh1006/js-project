// Selector
var btn = document.getElementById("btn");

// Event
btn.addEventListener("click", getPassword);

// function
function getPassword() {
   let chars = "01234567890abcdefghijklmnopqrstuvwxtzABCDEFGHIJK!@#$%^&*("
   let passwordLenght = 16;
   let password = "";

   for (let i = 0; i < passwordLenght; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
   }
   document.getElementById("password").value = password;
};

