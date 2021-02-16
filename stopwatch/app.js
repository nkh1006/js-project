var seconds = 00;
var tens = 00;
var appendTens = document.getElementById('tens');
var appendSeconds = document.getElementById('seconds');
var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');
var interval;
var duplicate = false;

function startTimer() {
   tens++;
   if(tens<9) {
      appendTens.innerHTML = "0" + tens;
   }
   if(tens>9) {
      appendTens.innerHTML = tens;
   }
   if(tens>99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
   }
   if(seconds > 9) {
      appendSeconds.innerHTML = seconds;
   }
}

buttonStart.addEventListener('click', function() {
   if(!duplicate) {
      interval = setInterval(startTimer);
      duplicate = true;
   };
});

buttonStop.addEventListener('click', function() {
   if(duplicate) {
      clearInterval(interval);
      duplicate = false;
   }
});

buttonReset.addEventListener('click', function() {
   if(duplicate) {
      clearInterval(interval);
      duplicate = false;
   }
   tens = "00";
   seconds = "00";
   appendTens.innerHTML = tens;
   appendSeconds.innerHTML = seconds;
});