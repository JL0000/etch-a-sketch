

function transition(e) {
    e.target.classList.toggle("hover");
}

function initialize() {
    const button = document.createElement("button")
    button.classList.add("set-grid-size");
    button.textContent = "Change grid size";
    document.body.appendChild(button);
    document.body.addEventListener("click", change);

    displayGrid(4);
}

initialize();

function change(e) {
    if (e.target.className === "set-grid-size") {
        let size = parseInt(prompt("Insert grid size"), 10)
        if (!isNaN(size) && size >= 1 && size <= 100) {
            displayGrid(size);
        }
    }
}

function displayGrid(size) {
    clearGrid();
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for (let i = 0; i < size * size; i++) {
        const grid_square = document.createElement("div");
        grid_square.classList.add("grid-square");
        grid_square.style.width = 80 / size + "vw" 
        grid_square.style.height = 80 / size + "vw" 
        grid.appendChild(grid_square);
    }
    document.body.appendChild(grid);
    const grid_squares = document.querySelectorAll(".grid-square");
    grid_squares.forEach(grid_square => grid_square.addEventListener("mouseover", transition));
    grid_squares.forEach(grid_square => grid_square.addEventListener("mouseout", transition));
}

function clearGrid() {
    const grid = document.querySelector(".grid");
    if (grid) {
        document.body.removeChild(grid);
    }
    
}
