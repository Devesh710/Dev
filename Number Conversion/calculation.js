//Decimal To Binary

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
  console.log(tableHtml);
  document.getElementById('binary-table').innerHTML = tableHtml;
 
  for (let j = i - 1; j >= 0; j--) {
    binaryString += binaryArray[j];
  }
  
 returnNum.innerText = binaryString;
};

function clickDecimal(decimal) {
  getbinary(decimal);
}


// Binary To Decimal

const getDecimal = (binary) => {
  let decimal = 0;
  let binaryArray = binary.split('');
  let power = 0;
  let pHtml = `(${binary})<sub>2</sub> = `;

  for (let i = binaryArray.length - 1; i >= 0; i--) {
    let binaryDigit = binaryArray[i];
    let decimalValue = Math.pow(2, power) * binaryDigit;
    decimal += decimalValue;
    pHtml += `(${binaryDigit} × 2<sup>${power}</sup>) + `;
    power++;
  }

  pHtml = pHtml.replace(/\+ $/, `= (${decimal})<sub>10</sub>`);
  console.log(pHtml);
  document.getElementById('phtml').innerHTML = pHtml;
  calculationStep.classList.remove("calculation-step");
  returnNum.innerText = decimal;
};

function clickBinary(binary) {
  getDecimal(binary);
}


