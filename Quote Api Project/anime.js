fetch("https://animechan.xyz/api/random")
.then(function(responce){
    return responce.json()
})
.then(function(data){
    console.log(data);
    document.getElementById('h5').innerHTML = data.quote;
    document.getElementById('animename').innerHTML = "Anime : " + data.anime;
    document.getElementById('charactername').innerHTML = "Character : " +  data.character;
})

document.getElementById('btn').addEventListener('click' , function(){
    location.reload()
})

