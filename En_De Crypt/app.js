let enBtn = document.getElementById('enButton');
let deBtn = document.getElementById('deButton');
let getText = document.getElementById('getText');
let getKey = document.getElementById('getKey');
let convertMsg = document.getElementById('convert-msg');
let showMsg = document.getElementById('show-convert-msg');
let convertBtn = document.getElementById('convert-btn');
let errorMsg = document.getElementById('error-msg');

function enStyle(){
    enBtn.style.border = '1px solid #34c759';
    enBtn.style.boxShadow = '0px 0px 0px 1px #046e1f';
    deBtn.style.removeProperty('border');
    deBtn.style.removeProperty('boxShadow');
    getText.placeholder = "Plain Text";
    convertMsg.innerText = "Encrypt message";
    getText.value = "";
    // getKey.value = "";
    convertMsg.classList.remove('hide');
    showMsg.classList.remove('hide');
    showMsg.innerText = ".";
}

function deStyle(){
    deBtn.style.border = '1px solid #34c759';
    deBtn.style.boxShadow = '0px 0px 0px 1px #046e1f';
    enBtn.style.removeProperty('border');
    enBtn.style.removeProperty('boxShadow');
    getText.placeholder = "Cipher Text";
    convertMsg.innerText = "Decrypt message";
    getText.value = "";
   // getKey.value = "";
    convertMsg.classList.remove('hide');
    showMsg.classList.remove('hide');
    showMsg.innerText = ".";
}

function encrypt(str, key)
{
key = parseInt(key, 10);
  
  key = ((key % 26) + 26) % 26;
  
  let encrypted = "";
  
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    
    if (charCode >= 65 && charCode <= 90) { // Uppercase letters
      encrypted += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
      encrypted += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
    } else {
      encrypted += str[i];
    }
  }
  showMsg.innerText = encrypted;
}

function decrypt(str,key){
    let decrypted = "";
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        decrypted += String.fromCharCode(((charCode - 65 - key + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        decrypted += String.fromCharCode(((charCode - 97 - key + 26) % 26) + 97);
      } else {
        decrypted += str[i]; 
      }
    }
    showMsg.innerText = decrypted;
}


enBtn.addEventListener("click", () => {
    enStyle();
});

deBtn.addEventListener("click", () =>{
    deStyle();
});

convertBtn.addEventListener("click", () => {
    if(getText.placeholder == "Plain Text"){
    encrypt(getText.value, getKey.value);
    }else{
        decrypt(getText.value, getKey.value);
    }
});

 getKey.addEventListener("input", () => {
  if(getKey.value > 20){
    errorMsg.style.display = 'block';
    errorMsg.innerText = "A higher value key produces an inappropriate result.";
}
else{
  errorMsg.style.display = 'none';
}
})

      
  