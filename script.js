function createGrid(){
    // Loop 16 times to create and add 16 columns
    for(let i = 0; i < 16; i++){

        // Create new column div to hold cells. Add "column" class
        let columnDiv = document.createElement("div");
        columnDiv.classList.add("column");

        // Loop 16 times to create and add 16 cells
        for(let j = 0; j < 16; j++){
            // Create new cell. Add "cell" class
            let newDiv = document.createElement("div");
            newDiv.classList.add("cell");
            

            // Event listener to change cell color when mouse is over cell
            newDiv.addEventListener("mouseover", function(){
                newDiv.style.backgroundColor = "blue";
            })

            // Add cell to column
            columnDiv.appendChild(newDiv);
        }
        // Add column to main grid container div
        document.getElementById("grid-container").appendChild(columnDiv);
    }
}

function clearGrid(){
    // Removes all content from grid-container div
    document.getElementById("grid-container").innerHTML = "";
}

function createGridWithInput(numOfSquares){
    // Will be called when user presses "New Sketch Pad" button and provides input.
    
    // Loop an amount of times determined by user
    for(let i = 0; i < numOfSquares; i++){
        // Create new column div to hold cells. Add "column" class
        let columnDiv = document.createElement("div");
        columnDiv.classList.add("column");

        // Loop an amount of times determined by user
        for(let j = 0; j < numOfSquares; j++){
            // Create new cell. Add "cell" class
            let newDiv = document.createElement("div");
            newDiv.classList.add("cell");

            // Overwrites width and height of cell class to fit user's selected amount of cells in original grid space
            let x = 1200/numOfSquares + "px";
            newDiv.style.width = x;
            newDiv.style.height = x;

            // Event listener to change cell color when mouse is over cell
            newDiv.addEventListener("mouseover", function(){
                newDiv.style.backgroundColor = "blue";
            })

            // Add cell to column
            columnDiv.appendChild(newDiv);
        }

        // Add column to main grid container div
        document.getElementById("grid-container").appendChild(columnDiv);

    }
}

createGrid();


// Event listener that triggers when New Sketch Pad button is pressed
let sketchButton = document.getElementById("sketch-button");
sketchButton.addEventListener("click", function(){

    // Bool to establish prompt loop in cases of invalid input
    let isValidInput = false;

    let userResponse = prompt("How many squares per side?");

    while(isValidInput == false){
        isValidInput = true;
        userResponse = prompt("How many squares per side?");

        // Checks if the input given is not a number
        if(isNaN(userResponse)){
            // input is not a number, trigger loop again to reprompt
            isValidInput = false;
        }
    }

    
    console.log(1200 / userResponse);
    clearGrid();
    createGridWithInput(userResponse);
})

