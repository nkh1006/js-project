const convertBtn = document.querySelector("#convertBtn");
const convertWrap = document.querySelector("#code");
const codeWrap = document.querySelector('#convertCode');

convertBtn.addEventListener('click', function() {
   var convertContent = convertWrap.value;
   convertContent = convertContent.replaceAll('<', '&lt;');
   convertContent = convertContent.replaceAll('>', '&gt;');
   codeWrap.value = convertContent;
});


