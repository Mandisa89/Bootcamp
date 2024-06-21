// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate whether a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has won and which sign has lost
// You may add additional parameters to assist you
function evaluatePlay(grid){

    let result = "";
    let winningPlayer = "";

    const xWon = "X won\nO lost";
    const oWon = "O won\nX lost";
    const tie = "It's a tie"

    // rowWin condition
    if(grid[0][0].charAt() != "" &&  grid[0][0].charAt() === grid[0][1].charAt() && grid[0][1].charAt() === grid[0][2].charAt()) {

        // it's a first row rowWin
        winningPlayer = grid[0][0].charAt();
    }
    else if(grid[1][0].charAt() != "" && grid[1][0].charAt() === grid[1][1].charAt() && grid[1][1].charAt() === grid[1][2].charAt()) {

        // it's a second row rowWin
        winningPlayer = grid[1][0].charAt();
    }
    else if(grid[2][0].charAt() != "" && grid[2][0].charAt() === grid[2][1].charAt() && grid[2][1].charAt() === grid[2][2].charAt()) {

        // it's a third row rowWin
        winningPlayer = grid[2][0].charAt();
    }
    // colWin condition
    else if(grid[0][0].charAt() != "" && grid[0][0].charAt() === grid[1][0].charAt() && grid[1][0].charAt() === grid[2][0].charAt()) {

        // it's a first column colWin
        winningPlayer = grid[0][0].charAt();
    }
    else if(grid[0][1].charAt() != "" && grid[0][1].charAt() === grid[1][1].charAt() && grid[1][1].charAt() === grid[2][1].charAt()) {

        // it's a second column colWin
        winningPlayer = grid[0][1].charAt();
    }
    else if(grid[0][2].charAt() != "" && grid[0][2].charAt() === grid[1][2].charAt() && grid[1][2].charAt() === grid[2][2].charAt()) {

        // it's a third column colWin
        winningPlayer = grid[0][2].charAt();
    }
    // diagonalWin condition
    else if(grid[0][2].charAt() != "" && grid[0][2].charAt() === grid[1][1].charAt() && grid[1][1].charAt() === grid[0][2].charAt()) {

        // it's a diagonalWin
        winningPlayer = grid[0][2].charAt();
    }
    // diagonalWinInverse condition
    else if(grid[0][0].charAt() != "" && grid[0][0].charAt() === grid[1][1].charAt() && grid[1][1].charAt() === grid[2][2].charAt()) {

        // it's a diagonalWinInverse
        winningPlayer = grid[0][0].charAt();
    }

    switch(winningPlayer) {

        case "O":
            result = oWon;
            break;

        case "X":
            result = xWon;
            break;
        
        default:
            result = tie;
            break;
    }

    return result;
}

console.log(evaluatePlay(diagonalWinInverse));



// REFERENCES

// Base Source Material: 

// Hyperiondev.(2021). L1T14 - Data Structures - 2-Dimensional Arrays (L1T14 reading material). 
// Retrieved 1 February 2023 via shared Dropbox.

// Other reading that turned out to not be relevant to this task
// Curry, Caleb.(2020). YOUTUBE: JavaScript Programming Tutorial 45 - Iterate Multidimensional Array with for and forEach. Retrieved on 2 February 2023 at https://www.youtube.com/watch?v=CXsnNQ51AdQ&t=477s&ab_channel=CalebCurry