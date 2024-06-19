const player1Btn = document.querySelector('#player1Btn');
const player2Btn = document.querySelector('#player2Btn');
const resetBtn = document.querySelector('#reset');
const player1Display = document.querySelector('.player1');
const player2Display = document.querySelector('.player2')
let changeOption = document.querySelector('#change');

let player1Score = 0;
let player2Score = 0;
let winingScore = 3;
let isGameOver = false;

player1Btn.addEventListener('click', function(){
    if(!isGameOver){
        player1Score+=1;
        if(player1Score == winingScore){
            isGameOver = true; 
            player1Display.classList.add('text-success');
            
        }
        player1Display.textContent= player1Score;  
    }
})
player2Btn.addEventListener('click', function(){
    if(!isGameOver){
        player2Score+=1;
        if(player2Score == winingScore){
            isGameOver = true; 
            player2Display.classList.add('text-success')
        }
        player2Display.textContent= player2Score;
    }
})


changeOption.addEventListener('change', function(){
    winingScore = parseInt(this.value);
    alert(this.value)
    reset();
})

resetBtn.addEventListener('click', reset)
function reset(){
    isGameOver = false;
    player1Score = 0;
    player1Score = 0;
    winingScore= 0;
    player1Display.textContent = 0;
    player2Display.textContent = 0;
  }