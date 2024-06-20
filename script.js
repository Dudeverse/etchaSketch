// ------ IMPORTANT GLOBAL VARIABLES

let grid = document.querySelector(".container");
let gridSize = 8; 

function startCanvas(gridSize) {
    grid.innerHTML = "";
    generateGrid(gridSize);
    paintBrush();
}
startCanvas(gridSize);

// ------ CANVAS GENERATION FUNCTIONALITY

function generateGrid(gridSize) {
    for (let i=0; i<gridSize; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "center";
        row.style.alignItems="center";
        row.className = "row";
        for (let j=0; j<gridSize; j++) {
            let pixel = document.createElement("div");
            pixel.style.display="flex";
            pixel.className="pixel";
            row.append(pixel);
            pixel.style.padding = "10px"
            pixel.style.border = "1px solid black"
            // pixel.addEventListener("mouseover", (event) => {
            //     pixel.style.backgroundColor = "red";
            // });
        }
        grid.append(row);
    }
}
// -----PAINTBRUSH FUNCTIONALITY

function paintBrush() {
    document.querySelectorAll(".pixel").forEach((element) => {
        element.addEventListener('mouseover', () => {
            changeBackgroundColor(element);
        });
    });
}
// -----COLORING-EFFECT
function changeBackgroundColor(element) {
    element.style.backgroundColor = "red";
}
// ------ SET GRID SIZE FUNCTIONALITY
const setGridBtn = document.querySelector(".setgrid");
setGridBtn.addEventListener('click', setGrid);
function setGrid() {
    previousGridSize = gridSize;
    gridSize = prompt("Enter a grid size (Range: 2-100)")
    if (gridSize === null) {
        gridSize=previousGridSize; //break out of the function early
    }
    grid.innerHTML = "";
    startCanvas(gridSize)
}

//----- RESET BUTTON FUNCTIONALITY
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener('click', resetBoard);
function resetBoard() {
    grid.innerHTML = "";
    startCanvas(gridSize)
}