const sampleText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry';
const textWrap = document.querySelector('h1');

let index = 0;

function writeText() {
   textWrap.innerText = sampleText.slice(0, index);
   index++;
   if (index > sampleText.length) {
      index = 0;
   }
}

setInterval(writeText,100);