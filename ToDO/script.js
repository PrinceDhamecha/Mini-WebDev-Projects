let input = document.getElementById('input')
let add = document.getElementById('btn')
let listcontainer = document.getElementById('listcontainer')
let ptest = document.getElementById('ptest')


function emptyvaluechecker() {
    if (input.value == "") {
        alert("Enter Something")
    } else {
        let newli = document.createElement('li')
        newli.innerHTML = input.value;
        listcontainer.appendChild(newli)
        let Deletebtn = document.createElement('button')
        Deletebtn.innerHTML = "Delete"
        newli.appendChild(Deletebtn)
        SaveData();

    }
    input.value = "";
}

listcontainer.addEventListener('click' , function removeandcut(e) {
    if(e.target.tagName === 'LI'){
          e.target.classList.toggle('checked')
          SaveData();
      }
    else if(e.target.tagName === "BUTTON"){
      e.target.parentElement.remove();
      SaveData();
    }
  },false)

add.addEventListener('click' , emptyvaluechecker);


function SaveData(){
  localStorage.setItem("data" , listcontainer.innerHTML);
}

function Showtask(){
  listcontainer.innerHTML = localStorage.getItem("data")
}
Showtask();


// if appendchild is a method , what are more methods 
// create element
 