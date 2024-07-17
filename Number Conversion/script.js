let from = document.querySelector("#from");
let to = document.querySelector("#to");
let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");
let lable3 = document.querySelector("#steps");
let enterNum = document.querySelector("#enter-num");
let convertBtn = document.querySelector("#convert-btn");
let returnNum = document.querySelector("#return-num");
let calculationStep = document.querySelector(".calculation-step");
let binaryTable = document.querySelector("#binary-table");
let decimalTable = document.querySelector("#decimal-table");
let phtml = document.querySelector("#phtml");
// let decimalHide = document.getElementById("decimallHide");

let fromLength;
let toLenght;
let convertValue;

let originalDecimalTableHTML = decimalTable.innerHTML;
let originalBinaryTableHTML = binaryTable.innerHTML;

convertBtn.addEventListener('click', () => {
  if (label1.innerText === "Enter Decimal Number") {
    clickDecimal(enterNum.value);
  } else if (label1.innerText === "Enter Binary Number") {
    clickBinary(enterNum.value);
  }
});

const D2B = () => {
  label1.innerText = "Enter Decimal Number";
  label2.innerText = "Binary Number";
  lable3.innerText = "Decimal to binary calculation steps";
  enterNum.value = "";
  returnNum.innerText = "";
  // decimalTable.innerHTML = "";
  phtml.innerHTML = "";
  // decimalTable.innerHTML = originalDecimalTableHTML;
  // decimalTable.style.display = "block";
  // binaryTable.style.display = "none";
};

const B2D = () => {
  label1.innerText = "Enter Binary Number";
  label2.innerText = "Decimal Number";
  lable3.innerText = "Binary to decimal calculation steps";
  enterNum.value = "";
  returnNum.innerText = "";
  binaryTable.innerHTML = "";
  // binaryTable.innerHTML = originalBinaryTableHTML;
  // binaryTable.style.display = "block";
  // decimalTable.style.display = "none";
};

const nullInput = () => {
  label1.innerText = "Select proper option";
  label2.innerText = "";
  lable3.innerText = "";
  enterNum.value = "";
  returnNum.innerText = "";
   phtml.innerHTML = "";
   binaryTable.innerHTML = "";
  // calculationStep.style.display = "none";
  // decimalTable.style.display = "none";
  // binaryTable.style.display = "none";
}


function check(fromLength, toLenght ){
  if(fromLength > toLenght){
        // console.log("Decimal to binary");
        D2B();
        calculationStep.style.display = "block";
  }else if(fromLength < toLenght){
    // console.log("Binary to decimal");
        B2D();
        calculationStep.style.display = "block";
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

window.addEventListener('load', () => {
  calculationStep.style.display = "none";
  check(from.value.length, to.value.length);
});



