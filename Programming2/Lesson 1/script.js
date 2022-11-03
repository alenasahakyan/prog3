
function generateMatrix(matLength, gr, grEat, pred, qar, explosion, amen) {
    let matrix = [];
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
        for (let i = 0; i < pred; i++) {
            let x = Math.floor(Math.random() * matLength);
            let y = Math.floor(Math.random() * matLength);
            if (matrix[y][x] == 0) {
                matrix[x][y] = 3;
            }
        }
        for (let i = 0; i < qar; i++) {
            let x = Math.floor(Math.random() * matLength);
            let y = Math.floor(Math.random() * matLength);
            if (matrix[y][x] == 0) {
                matrix[x][y] = 4;
            }
        }
        for (let i = 0; i < explosion; i++) {
            let x = Math.floor(Math.random() * matLength);
            let y = Math.floor(Math.random() * matLength);
            if (matrix[y][x] == 0) {
                matrix[x][y] = 5;
            }
        }
        for (let i = 0; i < amen; i++) {
            let x = Math.floor(Math.random() * matLength);
            let y = Math.floor(Math.random() * matLength);
            if (matrix[y][x] == 0) {
                matrix[x][y] = 6;
            }
        }
    }
    return matrix;
}
let matrix = generateMatrix(28, 13, 10, 5, 3, 5, 7);

var side = 120;

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let qarArr = [];
let explosionArr = [];
let amenakerArr = [];


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y);
                predatorArr.push(pred);
            }else if (matrix[y][x] == 4){
                let qar = new Qar(x,y);
                qarArr.push(qar);
            }
            else if (matrix[y][x] == 5){
                let explosion = new Explosion(x,y);
                explosionArr.push(explosion);

            }else if (matrix[y][x] == 6){
                let amen = new Amenaker(x,y);
                amenakerArr.push(amen);
            }
        }
    }

}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red");
            }else if (matrix[y][x] == 4){
                fill("black");
            }else if (matrix[y][x] == 5){
                fill("blue");
            }else if (matrix[y][x] == 6){
                fill("white");
            }

            rect(x * side, y * side, side, side);


        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in qarArr) {
        qarArr[i].mul()
    }
    for (let i in explosionArr) {
        explosionArr[i].explode()
    }
    for (let i in amenakerArr) {
        amenakerArr[i].eat()
    }
}


