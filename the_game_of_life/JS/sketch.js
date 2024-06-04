let rows = 20;
let columns = 20;
let resolution = 30;
let grid;


function make2DArray (columns, rows){
    const matrix = Array(rows).fill().map(() =>
        Array(columns).fill().map(() => Math.round(Math.random()))
    );
    return matrix;
}

function setup() {
    createCanvas(600, 600);
    columns = width / resolution;
    rows = height / resolution;
    grid = make2DArray(columns, rows);
}

function draw() {
    background(0);
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid [i] [j] == 1){
                fill(255);
                stroke(69);
                rect(x, y, resolution -1, resolution -1);
            }
        }
    }
    
    let next = make2DArray(columns, rows);

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];

            if (i == 0 || i == columns - 1 || j == 0 || j == rows - 1)  {
                next[i][j] = state;
            } else {

            let sum = 0;
            let neighbors = countNeighbors(grid, i, j);

            if (state == 0 && neighbors == 3){
                next[i][j] = 1;
            } else if (state = 1 && (neighbors > 3 || neighbors > 2)) {
                next[i][j] = 0;
            } else{
                next[i][j] = state;
            }
                 }
        }
    } 

    grid = next;
}

 function countNeighbors (grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i ++) {
        for (let j = -1; j < 2; j ++) {
            sum += grid[x+i][y+j];
        }
    }
    sum -= grid[x][y];
    return sum;
}