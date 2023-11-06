let createBtn = document.getElementById("btn");
let boxNote = document.querySelector(".box-note");

function showUpdate() {
  boxNote.innerHTML = localStorage.getItem("notes")
}

showUpdate()

function update() {
  localStorage.setItem("notes" , boxNote.innerHTML);
}

createBtn.addEventListener("click" , function(){


let note = document.createElement("p");
let img = document.createElement("img");
note.className = "note"
note.setAttribute("contenteditable" , "true")
img.setAttribute("id" , "imgg")
img.setAttribute("src" , "./images/trash-solid.svg")

boxNote.appendChild(note).appendChild(img)
update ();
})


boxNote.addEventListener("click" , (e)=>{
  e.target.tagName === "IMG" ? e.target.parentElement.remove() : sus() ;
  update();
  function sus() {
    if (e.target.tagName==="P") {
    
      notes = document.querySelectorAll(".box-note");
      notes.forEach(nt => {
        nt.onkeyup = function (){

          update();
        }
        
      });
    }
    
  }
  
})