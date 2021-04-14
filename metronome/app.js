const startBtn = document.querySelector('#startBtn');
const sound = document.querySelector('#sound');
const bpm = document.querySelector('#bpm');
const title = document.querySelector('h1');
let timer = null;
let nowBpm = 60;
let isPlay = false;

bpm.addEventListener('change', (e) => {
   title.innerHTML = e.target.value + ' BPM';
   nowBpm = parseInt(e.target.value);
   if (isPlay) {
      clearInterval(timer);
      timer = setInterval(playSound, realBpm(nowBpm));
   }
});

startBtn.addEventListener('click', () => {
   if (isPlay) {
      clearInterval(timer);
      changeBtn();            
   } else {
      changeBtn();
      playSound();
      timer = setInterval(playSound, realBpm(nowBpm));            
   }
   isPlay = !isPlay;
});

function playSound() {
   sound.currentTime = 0;
   sound.play();
}

function changeBtn() {
   if(startBtn.innerHTML === 'Start') {
      startBtn.innerHTML = 'Stop';
      startBtn.classList.remove('btn-primary');
      startBtn.classList.add('btn-danger');
   } else {
      startBtn.innerHTML = 'Start';
      startBtn.classList.remove('btn-danger');
      startBtn.classList.add('btn-primary');         
   }
}

function realBpm(bpm) {
   return (60 * 1000) / bpm;
}