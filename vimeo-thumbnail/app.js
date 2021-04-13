const getButton = document.querySelector("#getBtn");
const youtubeUrl = document.querySelectorAll(".vimeo-url");
const thumbnailWrap = document.querySelector(".thumbnail-wrap");
let thumArr = [];

getButton.addEventListener('click', getThum);

function getThum() {
   youtubeUrl.forEach(url => {
      if (url.value !== "") {
         let replaceUrl = url.value;
         let finUrl = '';
         let xhr = new XMLHttpRequest();
         replaceUrl = replaceUrl.replace("https://vimeo.com/", '');
         replaceUrl = replaceUrl.replace("https://player.vimeo.com/video/", '');
         replaceUrl = replaceUrl.replace("?autoplay=", '&');
         finUrl = replaceUrl.split('&')[0];
         xhr.open('GET', `https://vimeo.com/api/v2/video/${finUrl}.json`);
         xhr.send();
         xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
               let vimeoThumb = JSON.parse(xhr.response)[0].thumbnail_large;
               let thumbUrl = vimeoThumb;
               thumArr.push(thumbUrl);
            } else {
               console.log('The request failed!');
            }
         };
      }
   });
   thumArr.forEach(thum => {
      let img = document.createElement("img");
      img.setAttribute("src", `${thum}`)
      thumbnailWrap.appendChild(img);
   });
};