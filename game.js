// document.addEventListener('DOMContentLoaded', () => {
//     const itemForm = document.getElementById('itemForm');
//     const itemNameInput = document.getElementById('itemName');
//     const itemIdInput = document.getElementById('itemId');
//     const itemsTable = document.getElementById('itemsTable').getElementsByTagName('tbody')[0];

//     let items = [];
//     let currentId = 1;

//     itemForm.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const name = itemNameInput.value.trim();
//         const id = itemIdInput.value;

//         if (id) {
//             // Update item
//             const item = items.find(item => item.id === parseInt(id));
//             if (item) {
//                 item.name = name;
//                 renderTable();
//                 resetForm();
//             }
//         } else {
//             // Create item
//             const newItem = { id: currentId++, name };
//             items.push(newItem);
//             renderTable();
//             resetForm();
//         }
//     });

//     function renderTable() {
//         itemsTable.innerHTML = '';
//         items.forEach(item => {
//             const row = itemsTable.insertRow();
//             row.insertCell(0).innerText = item.id;
//             row.insertCell(1).innerText = item.name;
//             const actionsCell = row.insertCell(2);

//             const editButton = document.createElement('button');
//             editButton.innerText = 'Edit';
//             editButton.addEventListener('click', () => editItem(item.id));
//             actionsCell.appendChild(editButton);

//             const deleteButton = document.createElement('button');
//             deleteButton.innerText = 'Delete';
//             deleteButton.addEventListener('click', () => deleteItem(item.id));
//             actionsCell.appendChild(deleteButton);
//         });
//     }

//     function resetForm() {
//         itemNameInput.value = '';
//         itemIdInput.value = '';
//     }

//     function editItem(id) {
//         const item = items.find(item => item.id === id);
//         if (item) {
//             itemNameInput.value = item.name;
//             itemIdInput.value = item.id;
//         }
//     }

//     function deleteItem(id) {
//         items = items.filter(item => item.id !== id);
//         renderTable();
//     }

//     // Initial render
//     renderTable();
// });


//

// let blockSize = 25;
// let total_row = 17; //total row number
// let total_col = 17; //total column number
// let board;
// let context;
 
// let snakeX = blockSize * 5;
// let snakeY = blockSize * 5;
 
// // Set the total number of rows and columns
// let speedX = 0;  //speed of snake in x coordinate.
// let speedY = 0;  //speed of snake in Y coordinate.
 
// let snakeBody = [];
 
// let foodX;
// let foodY;
 
// let gameOver = false;
 
// window.onload = function () {
//     // Set board height and width
//     board = document.getElementById("board");
//     board.height = total_row * blockSize;
//     board.width = total_col * blockSize;
//     context = board.getContext("2d");
 
//     placeFood();
//     document.addEventListener("keyup", changeDirection);  //for movements
//     // Set snake speed
//     setInterval(update, 10000 / 10);
// }
 
// function update() {
//     if (gameOver) {
//         return;
//     }
 
//     // Background of a Game
//     context.fillStyle = "green";
//     context.fillRect(0, 0, board.width, board.height);
 
//     // Set food color and position
//     context.fillStyle = "yellow";
//     context.fillRect(foodX, foodY, blockSize, blockSize);
 
//     if (snakeX == foodX && snakeY == foodY) {
//         snakeBody.push([foodX, foodY]);
//         placeFood();
//     }
 
//     // body of snake will grow
//     for (let i = snakeBody.length - 1; i > 0; i--) {
//         // it will store previous part of snake to the current part
//         snakeBody[i] = snakeBody[i - 1];
//     }
//     if (snakeBody.length) {
//         snakeBody[0] = [snakeX, snakeY];
//     }
 
//     context.fillStyle = "white";
//     snakeX += speedX * blockSize; //updating Snake position in X coordinate.
//     snakeY += speedY * blockSize;  //updating Snake position in Y coordinate.
//     context.fillRect(snakeX, snakeY, blockSize, blockSize);
//     for (let i = 0; i < snakeBody.length; i++) {
//         context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
//     }
 
//     if (snakeX < 0 
//         || snakeX > total_col * blockSize 
//         || snakeY < 0 
//         || snakeY > total_row * blockSize) { 
         
//         // Out of bound condition
//         gameOver = true;
//         alert("Game Over");
//     }
 
//     for (let i = 0; i < snakeBody.length; i++) {
//         if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) { 
             
//             // Snake eats own body
//             gameOver = true;
//             alert("Game Over");
//         }
//     }
// }
 
// // Movement of the Snake - We are using addEventListener
// function changeDirection(e) {
//     if (e.code == "ArrowUp" && speedY != 1) { 
//         // If up arrow key pressed with this condition...
//         // snake will not move in the opposite direction
//         speedX = 0;
//         speedY = -1;
//     }
//     else if (e.code == "ArrowDown" && speedY != -1) {
//         //If down arrow key pressed
//         speedX = 0;
//         speedY = 1;
//     }
//     else if (e.code == "ArrowLeft" && speedX != 1) {
//         //If left arrow key pressed
//         speedX = -1;
//         speedY = 0;
//     }
//     else if (e.code == "ArrowRight" && speedX != -1) { 
//         //If Right arrow key pressed
//         speedX = 1;
//         speedY = 0;
//     }
// }
 
// // Randomly place food
// function placeFood() {
 
//     // in x coordinates.
//     foodX = Math.floor(Math.random() * total_col) * blockSize; 
     
//     //in y coordinates.
//     foodY = Math.floor(Math.random() * total_row) * blockSize; 
// }

///Rock paper sesors
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    
    
    // Function to 
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ['rock','paper','scissors']
        
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
    
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                
    
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
    
                // Function to check who wins
                winner(this.innerText,computerChoice)
                
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
        
    }
    
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
    
            }else{
                result.textContent = 'Player Won'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
    
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
    
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
    
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
    
     
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
    
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
    
    
    // Calling playGame function inside game
    playGame();
    
    }