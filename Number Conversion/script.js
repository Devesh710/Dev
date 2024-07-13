let from = document.querySelector("#from");
let to = document.querySelector("#to");
let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");
let enterNum = document.querySelector("#enter-num");
let convertBtn = document.querySelector("#convert-btn");
let returnNum = document.querySelector("#return-num");
let calculationStep = document.querySelector(".calculation-step");

let fromLength;
let toLenght;
let convertValue;

// enterNum.addEventListener('input', () => {
// // console.log(enterNum.value);
// convertBtn.addEventListener('click', () => {
// clickValue(enterNum.value);
// });
// });

const D2B = () => {
  label1.innerText = "Enter Decimal Number";
  label2.innerText = "Binary Number";

  enterNum.value = "";
  returnNum.innerText = "";
  convertBtn.addEventListener('click', () => {
    clickValue(enterNum.value);
  });
};

const B2D = () => {
  label1.innerText = "Enter Binary Number";
  label2.innerText = "Decimal Number";

  enterNum.value = "";
  returnNum.innerText = "";
  convertBtn.addEventListener('click', () => {
    clickValue(enterNum.value);
  });
};

const nullInput = () => {
  label1.innerText = "Select proper option";
  label2.innerText = "";
  enterNum.value = "";
  returnNum.innerText = "";
}


function check(fromLength, toLenght ){
  if(fromLength > toLenght){
        console.log("Decimal to binary");
        D2B();
  }else if(fromLength < toLenght){
    console.log("Binary to decimal");
        B2D();
  }else if(fromLength === toLenght){
    // console.log("invalid input");
    nullInput();
  }
};

from.addEventListener("change", function() {
    //   console.log(from.value); 
   //   console.log(from.options[from.selectedIndex].text); 
  // console.log(from.value.length);
  check(from.value.length, to.value.length);
});

to.addEventListener("change", function() {
    //   console.log(to.value); 
   //   console.log(to.options[to.selectedIndex].text);
  // console.log(to.value.length);
  check(from.value.length, to.value.length);
});





