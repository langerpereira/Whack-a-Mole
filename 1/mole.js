let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let moleInterval;
let plantInterval;

window.onload = function(){
    setGame();
    document.getElementById("restart-btn").addEventListener("click", restartGame);
}

function setGame(){
    // Clear existing intervals if any
    clearInterval(moleInterval);
    clearInterval(plantInterval);
    
    score = 0;
    gameOver = false;
    document.getElementById("score").innerText = score.toString();

    // Set up the grid in HTML
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    moleInterval = setInterval(setMole, 1000);
    plantInterval = setInterval(setPlant, 2000);
}

function restartGame(){
    // Clear existing intervals and reset the game
    clearInterval(moleInterval);
    clearInterval(plantInterval);
    document.getElementById("board").innerHTML = "";
    setGame();
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
    if (gameOver) {
        return;
    }
    if (currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img")
    mole.src = "./monty-mole.png"

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if (gameOver) {
        return;
    }
    if (currPlantTile){
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img")
    plant.src = "./piranha-plant.png"

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}
