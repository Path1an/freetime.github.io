let rows = 20;
let columns = 20;
let resolution = 30;

const matrix = Array(rows).fill().map(() =>
    Array(columns).fill().map(() => Math.round(Math.random()))
);
//console.log(matrix);

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
    
}

