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
    
    for(let i = 0; i < numOfSquares; i++){
        // Create new column div to hold cells. Add "column" class
        let columnDiv = document.createElement("div");
        columnDiv.classList.add("column");

        for(let j = 0; j < numOfSquares; j++){
            // Create new cell. Add "cell" class
            let newDiv = document.createElement("div");
            newDiv.classList.add("cell");

            // NEED TO OVERWRITE CELL SIZE
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

let sketchButton = document.getElementById("sketch-button");
sketchButton.addEventListener("click", function(){
    let userResponse = prompt("How many squares per side?");
    console.log(1200 / userResponse);
    clearGrid();
    createGridWithInput(userResponse);
})

