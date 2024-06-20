

let grid = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener('click', resetBoard);

function generateGrid() {
    for (let i=0; i<16; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.justifyContent = "center";
        row.style.alignItems="center";
        row.className = "row";
        for (let j=0; j<=16; j++) {
            let pixel = document.createElement("div");
            pixel.className="pixel";
            row.append(pixel);
            pixel.style.border = "1px solid black"
            pixel.style.padding = "10px"
            // pixel.addEventListener("mouseover", (event) => {
            //     pixel.style.backgroundColor = "red";
            // });
        }
        grid.append(row);
    }
}

generateGrid();

function paintBrush() {
    document.querySelectorAll(".pixel").forEach((element) => {
        element.addEventListener('mouseover', () => {
            changeBackgroundColor(element);
        });
    });
}

paintBrush()

function changeBackgroundColor(element) {
    element.style.backgroundColor = "red";
}

function resetBoard() {
    grid.innerHTML = "";
    generateGrid();
    paintBrush();
}