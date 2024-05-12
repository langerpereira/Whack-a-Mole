let currMoleTile;
let currplantTile;

window.onload = function(){
    setGame();
}

function setGame(){
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile() {
    //math.random --> 0-1 --> (0-1) * 9 = (0-9) --> round down to (0-8) integers
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){

    if (currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img")
    mole.src = "./monty-mole.png"

    let num = getRandomTile();
    if (currplantTile && currplantTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if (currplantTile){
        currplantTile.innerHTML = "";
    }

    let plant = document.createElement("img")
    plant.src = "./piranha-plant.png"

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currplantTile = document.getElementById(num);
    currplantTile.appendChild(plant);
}