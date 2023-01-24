// as soon as you click on START GAME change the question.
// 'Do you want to draw a new card?' 2:24:01 video freecode

const myHands = document.querySelector('.hands');
let card = Math.floor(Math.random() * 11+1);
let secondCard = Math.floor(Math.random() * 11+1);

const sumCards = document.querySelector('.sum')
let sum = card + secondCard;
let clickStart = true;

const startBtn = document.querySelector('.startGame');
const question = document.querySelector('h3');

startBtn.addEventListener('click', () => {
        if(clickStart) {
            question.textContent = 'Do you want to draw a new card?'
            myHands.textContent += ' ' + card + ' + ' + secondCard;
            
            if(sum === 21){
                var word = document.querySelector(".congratsWord");
                word.textContent = 'Parabens voce conseguiu'
                newCardBtn.setAttribute('disabled','');
             }
             
            sumCards.textContent += ' ' + sum 
            clickStart = false;
        } else {
            alert('press "NEW CARD"');
        }
});

const newCardBtn = document.querySelector('.newCard');

newCardBtn.addEventListener('click', () => {
    if(clickStart === false) {
        card = Math.floor(Math.random() * 11+1);
        sum += card;
        sumCards.textContent = 'Sum: ' + sum;
        myHands.textContent += ' + ' + card;
        if(sum <= 21) {
            if(sum === 21){
                var word = document.querySelector(".congratsWord");
                word.textContent = 'Parabens voce conseguiu'
                newCardBtn.setAttribute('disabled','');
             }
        } else {
            var word = document.querySelector(".congratsWord");
            word.textContent = 'Oh sorry, good luck next time!';
            newCardBtn.setAttribute('disabled','');
        } 
    }
})

