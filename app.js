const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="~!@#$%^&*()_+|}{:";

const passbox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperinput = document.getElementById("upper-case");
const lowerinput= document.getElementById("lower-case");
const numberinput = document.getElementById("numbers");
const symbolinput = document.getElementById("symbols");



const getrandomdata = (dataset) =>{
return dataset[Math.floor(Math.random()*dataset.length)];
}

const generatepass = (password = "") => {
if(upperinput.checked) {
    password += getrandomdata(upperset)
}

if(lowerinput.checked) {
    password += getrandomdata(lowerset)
}

if(numberinput.checked) {
    password += getrandomdata(number)
}

if(symbolinput.checked) {
    password += getrandomdata(symbols)
}

if (password.length < totalchar.value) {
    return generatepass(password);
}
passbox.innerText = truncatestring(password, totalchar.value);
}
generatepass();
document.getElementById("btn").addEventListener(
"click", 
function() {
    generatepass();
}
);

function truncatestring(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}
