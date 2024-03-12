let input = document.getElementById("input")
let ok = document.getElementById("ok")
let rev = "";
let result = document.getElementById("result")

function reverseString(str){
     return str.split("").reverse().join("")
}

ok.addEventListener('click' , function(){
    let value = String(input.value)
    rev = reverseString(value);
        if (value == rev) {
            console.log("Yes");
            result.innerHTML = "Yes"
        }
        else {
            console.log("No");
        result.innerHTML = "No"
        }
        


})