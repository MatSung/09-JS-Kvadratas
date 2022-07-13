"use strict"

//make 9 divs
//store divs in array
//place a rock in one of the 9 numbers
//keep count of divs in the array
//maybe instead give id of name+number

//enter amount first maybe


let beginningAmount = 9;
let rock = 0;
generateSquares(beginningAmount);


//button to reset game
document.getElementById("button").addEventListener("click", function () {
    beginningAmount = document.getElementById("input").value;
    generateSquares(beginningAmount)
});


//generating new game with rock placement
function generateSquares(amount) {
    let containerElement = document.querySelector(".square-container");
    containerElement.innerHTML = '';
    console.log("deleted old game");

    let appendingNode = document.createElement("div");
    appendingNode.className = "square unpicked blue";
    appendingNode.setAttribute("onclick", "buttonCheck(this)");
    for (let i = 0; i < amount; i++) {
        appendingNode.id = "square" + i;
        containerElement.append(appendingNode.cloneNode(true));
    }
    console.log("created new squares and added them to container")
    let min = 0;
    let max = amount;
    //atsitiktine akmens vieta
    rock = Math.floor(Math.random() * (max - min) + min);
    console.log("ready to play");
    console.log("rock location is " + rock);
}

//onclick make object send its id
function buttonCheck(element) {
    if (element.classList.contains("unpicked")) {
        element.classList.remove("unpicked");
        element.classList.remove("blue");

        //only works up to single digits
        //fix this
        let squareNumber;

        if (element.id.length == 8) {
            squareNumber = ""  + element.id[element.id.length - 2] + element.id[element.id.length - 1];
        } else {
            squareNumber = element.id[element.id.length - 1];
        }
        console.log(squareNumber);
        // console.log();
        if (squareNumber == rock) {
            element.classList.add("green");
            //you won
        }
        else {
            element.classList.add("red");
        }


    }

    return;
}
