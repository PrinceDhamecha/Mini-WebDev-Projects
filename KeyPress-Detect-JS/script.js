let one = document.getElementById('1')
let two = document.getElementById('2')
let three = document.getElementById('3')
let body = document.getElementById('body')

document.addEventListener('keydown', function check(e){
    console.log(e);
if (e.key === ' ') {
    body.innerHTML = `You Pressed The <span>SPACE</span> key`
} else
 body.innerHTML = `You Pressed The <span>${e.key}</span> key`
})
// rest all keys have their names in e.keys
// space have an empty key so i printed spacebar whenever its "" in key

