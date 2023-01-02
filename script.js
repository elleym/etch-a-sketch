document.addEventListener("DOMContentLoaded", function(){

populateBoard(16);
})

function populateBoard(boxNum){
    let board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${boxNum}, 1fr)`
    board.style.gridTemplateRows = `repeat(${boxNum}, 1fr)`
    
    let numDivs = boxNum * boxNum;

    for (let i = 0; i < numDivs; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "yellow";
    board.insertAdjacentElement("beforeend", square)
    }
}

