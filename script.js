const MAX_SIDE_LEN = 50

function initialize() {
    updateGrid();
    document.body.addEventListener("click", promptUser);
}

function promptUser(e) {
    if (e.target.className === "set-grid-size") {
        let size = parseInt(prompt("Insert grid size"), 10)
        if (!isNaN(size) && size >= 1 && size <= 100) {
            updateGrid(size);
        }
    }
}

function generateGrid(size) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    for (let i = 0; i < size * size; i++) {
        const grid_square = document.createElement("div");
        grid_square.classList.add("grid-square");
        grid_square.style.width = MAX_SIDE_LEN / size + "vw" 
        grid_square.style.height = MAX_SIDE_LEN / size + "vw" 
        grid.appendChild(grid_square);
    }
    document.body.appendChild(grid);
}

function updateGrid(size = 4) {
    clearGrid();
    generateGrid(size);
    const grid_squares = document.querySelectorAll(".grid-square");
    grid_squares.forEach(grid_square => grid_square.addEventListener("mouseover", transition));
    grid_squares.forEach(grid_square => grid_square.addEventListener("mouseout", transition));
}

function transition(e) {
    e.target.classList.toggle("hover");
}

function clearGrid() {
    const grid = document.querySelector(".grid");
    if (grid) {
        document.body.removeChild(grid);
    }
    
}

initialize();
