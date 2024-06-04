let rows = 20;
let columns = 20;
let resolution = 30;

const matrix = Array(rows).fill().map(() =>
    Array(columns).fill().map(() => Math.round(Math.random()))
);

function setup() {
    createCanvas(600, 600);
    columns = width / resolution;
    rows = height / resolution;
}

function draw() {
    background(0);
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (matrix [i] [j] == 1){
                fill(255);
                stroke(255);
                rect(x, y, resolution -1, resolution -1);
            }
        }
    }
    
    const matrix = Array(rows).fill().map(() =>
        Array(columns).fill().map(() => Math.round(Math.random()))
    );

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
           
            let sum = 0;
            let neighbors = count(matrix, i, j);
        }
    } 
    
}

countNeighbors (matrix, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i ++) {
        for (let j = -1; j < 2; j ++) {
            sum += matrix[i][j];
        }
    }
    sum -= matrix[x][y];
    return sum;
}