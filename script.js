const empty = "";

const uCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_";

const pLengthElement = document.getElementById("p-length");
const uCaseElement = document.getElementById("p-uppercase");
const lCaseElement = document.getElementById("p-lowercase");
const numberElement = document.getElementById("p-number");
const symbolElement = document.getElementById("p-symbols");
const submitElement = document.getElementById("submit");
const passwordElement = document.getElementById("password");


submitElement.addEventListener("click", () => {
    let initialPassword = empty;
    uCaseElement.checked ? initialPassword += uCaseLetters : "";
    lCaseElement.checked ? initialPassword += lCaseLetters : "";
    numberElement.checked ? initialPassword += numbers : "";
    symbolElement.checked ? initialPassword += symbols : "";

    passwordElement.value = generatePassword(pLengthElement.value, initialPassword);
});

function generatePassword(l, initialPassword){
    let pass = "";

    for(let i=0; i<l ; i++){
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }

    return pass;
}

//  copy password to clipboard

const copyButton = document.getElementById("copy");

copyButton.addEventListener("click", ()=>{
    if(passwordElement.value == ""){
        alert("pahle password generate kr");
    }else{
        passwordElement.select();
        document.execCommand("copy");
        alert("ho gaya copy");
    }
});
