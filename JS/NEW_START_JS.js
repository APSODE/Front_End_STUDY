const PTAG = document.querySelector("p") 

PTAG.addEventListener("click", UPDATE_NAME) 

function UPDATE_NAME() {
    let NAME = prompt("ENTER A NEW NAME!")
    PTAG.textContent = "Player 1: " + NAME
}
