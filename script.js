let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){

populateBoard(16);

let btnPopup = document.querySelector("#popup")
btnPopup.addEventListener("click", function() {
    let size = getSize();
    populateBoard(size)
})
})

function populateBoard(boxNum){

    document.querySelector(".board").addEventListener("click", function(e) {
        if(e.target.tagName != "BUTTON") {
            click = !click
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Drawing";
            }
            else {
                draw.innerHTML = "Click on board to begin drawing";
            }
        }
    })

    let board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${boxNum}, 1fr)`
    board.style.gridTemplateRows = `repeat(${boxNum}, 1fr)`
    
    let numDivs = boxNum * boxNum;

    for (let i = 0; i < numDivs; i++) {
    let square = document.createElement("square");
    square.addEventListener("mouseover", colorDiv)
    board.insertAdjacentElement("beforeend", square)
    }
}

function getSize() {
    let input = prompt("Enter Grid Size")
    let message = document.querySelector("#message")
    if (input == "") {
        message.innerHTML = "Grid Size Required"
    }
    else if(input < 0 || input > 100) {
        message.innerHTML = "Grid Size must be between 0 and 100."
    }
    else {
        message.innerHTML = "Grid Size Updated"
    }
    return input;
}
function colorDiv() {
    if(click){
        if(color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = 'black'
        }
    }
}
function setColor(colorChoice) {
    color = colorChoice
}

function boardReset(){
    let divs = document.querySelectorAll("square")
    divs.forEach((square) => square.style.backgroundColor = "white")
}