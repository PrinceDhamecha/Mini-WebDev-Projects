const greenbtn = document.getElementById("green")
const bluebtn = document.getElementById("blue")
const blackbtn = document.getElementById("black")
const redbtn = document.getElementById("red")
const yellowbtn = document.getElementById("yellow")
const body = document.getElementById("body")
const randombtn = document.getElementById("random")


greenbtn.addEventListener('click' , ()=> body.style.backgroundColor = 'green')
redbtn.addEventListener('click' , ()=> body.style.backgroundColor = 'red')
blackbtn.addEventListener('click' , ()=> body.style.backgroundColor = 'black')
yellowbtn.addEventListener('click' , ()=> body.style.backgroundColor = 'yellow')
bluebtn.addEventListener('click', ()=> body.style.backgroundColor = 'blue')

function generateRandomHexCode() {
   let randomNum = Math.floor(Math.random() * 16777215);
   let hexCode = randomNum.toString(16).padStart(6, '0');
   return '#' + hexCode;
}

randomHexCode = generateRandomHexCode();
randombtn.addEventListener('click' , ()=> body.style.backgroundColor = generateRandomHexCode())

