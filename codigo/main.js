
const myHands = document.querySelector('.hands');
let card = Math.floor(Math.random() * 11+1);
let secondCard = Math.floor(Math.random() * 11+1);


const sumCards = document.querySelector('.sum')
let sum;

let clickStart = false;

const startBtn = document.querySelector('.startGame');
const message = document.querySelector('h3');


startBtn.addEventListener('click', () => {
    sum = card + secondCard
        if(clickStart === false) {
            message.textContent = 'Do you want to draw a new card?'
            myHands.textContent += ' ' + card + ' + ' + secondCard;
            
            if(sum === 21){
                message.textContent = 'You winn !!'
                newCardBtn.setAttribute('disabled','');

                resetGame();
             }
            sumCards.textContent += ' ' + sum 
            clickStart = true;
        } else {
            startBtn.setAttribute('disabled','');
        }
});


const newCardBtn = document.querySelector('.newCard');


newCardBtn.addEventListener('click', () => {
    if(clickStart === true) {
        card = Math.floor(Math.random() * 11+1);
        sum += card;
        sumCards.textContent = 'Sum: ' + sum;
        myHands.textContent += ' + ' + card;
        if(sum <= 21) {
            if(sum === 21){
                message.textContent = 'you winn !!';

                newCardBtn.setAttribute('disabled','');
                resetGame();
             }
        } else {
            message.textContent = 'Oh sorry, good luck next time!';

            newCardBtn.setAttribute('disabled','');
            resetGame();
        } 
    }
})

// create a button for game reset
function resetGame() {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'PLAY AGAIN';
    document.querySelector('.container').appendChild(resetBtn);

    resetBtn.addEventListener('click', () => {
        message.textContent = 'Want to play a round?';
        myHands.textContent = 'Your hands: ';
        sumCards.textContent = 'Sum: ';
        sum = 0;
        clickStart = false;
        startBtn.removeAttribute('disabled','');
        newCardBtn.removeAttribute('disabled', '');
        resetBtn.remove();
    });
}

