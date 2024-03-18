let final = document.getElementById('final')
let button = document.getElementById('button')
let delay = 1000;
let audio = document.getElementById('audio1')
let headsaudio = document.getElementById('headsaudio')
let tailsaudio = document.getElementById('tailsaudio')

function random(){
    button.disabled = true;
    final.innerHTML = "Flipping Coin"
    audio.play()
    setTimeout(function(){
        let x = Math.floor(Math.random() * 2)
        console.log(x);
        if (x === 1) {
            final.innerHTML = "TAILS"
            tailsaudio.play()
        } else {
            final.innerHTML = "HEADS"
            headsaudio.play()
        }
        button.disabled = false;
    }, 3500)
   
} 
button.addEventListener('click' ,random )




