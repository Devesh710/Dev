// let binaryArray = new Array(32).fill(0);

// const getbinary = (decimal) => {
//     let i = 0;
//     let binaryString= '';
//     while(decimal > 0){
//         binaryArray[i] = decimal % 2;
//         decimal =Math.floor(decimal / 2);  
//         i++;
//     }

//     for(let j = i - 1; j >= 0; j-- ){
//         console.log(binaryArray[j]); 
//         binaryString += binaryArray[j];
//     }
//   returnNum.innerText = binaryString;
// };

// function clickValue(decimal){
//     console.log(decimal);
//     getbinary(decimal);
// }

let binaryArray = new Array(32).fill(0);
let quotientArray = [];

const getbinary = (decimal) => {
  let i = 0;
  let binaryString = '';
  let quotient = decimal;
  let tableHtml = '<table><tr><th>Division</th><th>Quotient</th><th>Remainder</th></tr>';

  while (quotient > 0) {
    binaryArray[i] = quotient % 2;
    let division = Math.floor(quotient / 2);
    quotientArray.push(division);
    tableHtml += `<tr><td>${quotient} ÷ 2</td><td>${division}</td><td>${binaryArray[i]}</td></tr>`;
    quotient = division;
    i++;
  }

  tableHtml += '</table>';
  document.getElementById('binary-table').innerHTML = tableHtml;
  calculationStep.classList.remove("calculation-step");

  for (let j = i - 1; j >= 0; j--) {
    binaryString += binaryArray[j];
  }
 // document.getElementById('returnNum').innerText = binaryString;
 returnNum.innerText = binaryString;
};

function clickValue(decimal) {
  // console.log(decimal);
  getbinary(decimal);
}
