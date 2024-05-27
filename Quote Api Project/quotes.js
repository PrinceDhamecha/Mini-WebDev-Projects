// fetch("https://animechan.xyz/api/random")

fetch("https://api.quotable.io/random")
.then(function(responce){
    return responce.json()
})
.then(function(data){
    console.log(data);
    document.getElementById('h5').innerHTML = data.content;
    document.getElementById('animename').innerHTML = "Author : " + data.author;
   
})

document.getElementById('btn').addEventListener('click' , function(){
    location.reload()
})
