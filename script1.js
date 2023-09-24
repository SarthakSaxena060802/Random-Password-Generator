let passBox=document.getElementById('passBox');
let copyIcon=document.getElementById('copyIcon');
let sliderLen=document.getElementById('sliderLen');
let sliderValue=document.getElementById('sliderValue');
let lowerCase=document.getElementById('lowerCase');
let upperCase=document.getElementById('upperCase');
let numbers=document.getElementById('numbers');
let symbols=document.getElementById('symbols');
let genbtn=document.getElementById('genbtn');

sliderValue.textContent=sliderLen.value; //page open karte hi password length 8(default) show hogi
//slider value ko update karne ke liye eventlistener lagana padega taki slidervalue realtime me change ho sake
sliderLen.addEventListener('input',()=>{
    sliderValue.textContent=sliderLen.value;
});

genbtn.addEventListener('click', ()=>{
    passBox.value=generatePassword();
});

let upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower= "abcdefghijklmnopqrstuvwxyz";
let nums= "1234567890";
let symb= "@#$%^&*";

function generatePassword(){
    let password="";  //password string banai hai taki usme ham jo result aaega vo save kar sakeen..
    let allchars="";  //allchars string banai hai taki usme ham saare available chars(jo ki checked hain) vo add kar saken. Isi se password banega baadme...
    
    allchars += lowerCase.checked ? lower : "";
    allchars += upperCase.checked ? upper : "";
    allchars += numbers.checked ? nums : "";
    allchars += symbols.checked ? symb : "";
    let i=1;
    if(allchars == "" || allchars.length == 0){
        return password;
    }
    while(i<=sliderLen.value){
        password += allchars[Math.floor(Math.random()* allchars.length)];
        i++;
    }
    return password;
}

copyIcon.addEventListener('click', ()=>{
    if(passBox.value != 0 || passBox.value.length>0){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.title = "";
        },3000)
    }
});