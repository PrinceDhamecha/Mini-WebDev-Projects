let pass = document.getElementById('pass')
let is8 = document.getElementById('is8')
let isnum = document.getElementById('isnum')
let isup = document.getElementById('isUp')
let islow = document.getElementById('islow')
let isspecial = document.getElementById('isspecial')
let regexnum = /\d/
let regexupper = /[A-Z]/
let regexlower = /[a-z]/
let regexspecial = /\W/
let tick = '<i class="ri-checkbox-circle-line"></i>'

// /[A-Z]/  checks if it has atleast one uppercase
// /[a-z]/  checks if it has atleast one lowercase
// /\d/  checks if it has any numbers
// /\W/ Checks Special Characters

pass.addEventListener('input', function () {
    if (pass.value.length >= 8) {
        is8.style.color = 'green'
        let data = is8
        console.log(data);
        is8.innerHTML = `${tick} ${data.innerText}`
    }
    else {
        is8.style.color = 'black'
        is8.innerHTML = 'Min 8 Characters'
    }


    if (regexnum.test(pass.value)) {
        isnum.style.color = 'green'
        let data = isnum
        isnum.innerHTML = `${tick} ${data.innerText}`
    }
    else {
        isnum.style.color = 'black'
        isnum.innerHTML = 'Numbers'

    }



    if (regexupper.test(pass.value)) {
        isup.style.color = 'green'
        let data = isup
        isup.innerHTML = `${tick} ${data.innerText}`

    }
    else {
        isup.style.color = 'black'
        isup.innerHTML = 'Upper Case'
    }



    if (regexlower.test(pass.value)) {
        islow.style.color = 'green'
        let data = islow
        islow.innerHTML = `${tick} ${data.innerText}`

    }
    else {
        islow.style.color = 'black'
        islow.innerHTML = 'Lower Case'
    }



    if (regexspecial.test(pass.value)) {
        isspecial.style.color = 'green'
        let data = isspecial
        isspecial.innerHTML = `${tick} ${data.innerText}`

    }
    else {
        isspecial.style.color = 'black'
        isspecial.innerHTML = 'Special Characters'
    }
})
