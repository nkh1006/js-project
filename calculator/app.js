let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
   button.addEventListener('click', getInputValue);
});

function getInputValue(e){
    let input = e.target.innerText
    printValue(input);
}

function printValue(val){
  let out = document.querySelector("#result");
  let current = out.innerHTML;
  if(out.innerHTML == "0"){
    if(val != "C" && val != "D"){ 
      out.innerHTML = "";
      out.innerHTML += val;
    }
  }
  else{
    if(val == "D" ){
      out.innerText = current.slice(0,-1);
      if(out.innerHTML.length <= 1){
        out.innerHTML = "0";
      }
    }
    if(val != "C" && val !="D" && val != "="){ 
      out.innerHTML += val;
    }
    if(val == "="){
      let res = out.innerHTML;
      out.innerHTML = eval(res);
    }
    if(val == "C"){
      out.innerHTML = "0";
    }
  }
}