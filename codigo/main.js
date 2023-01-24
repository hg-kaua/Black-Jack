
//  2:24:01 video freecode

// criar variavel para armazenar a classe hands e para gerar numeros aleatorios
const myHands = document.querySelector('.hands');
let card = Math.floor(Math.random() * 11+1);
let secondCard = Math.floor(Math.random() * 11+1);

// criar a soma variavel que armazena a soma das cartas
const sumCards = document.querySelector('.sum')
let sum = card + secondCard;

// variavel para verificar se botao START GAME foi iniciado
let clickStart = true;

// variavel que armazena o botao de START GAME
const startBtn = document.querySelector('.startGame');
const question = document.querySelector('h3');

// adicionar o evendo click ao botao START GAME
startBtn.addEventListener('click', () => {
        if(clickStart) {
            question.textContent = 'Do you want to draw a new card?'
            myHands.textContent += ' ' + card + ' + ' + secondCard;
            
            if(sum === 21){
                var word = document.querySelector(".congratsWord");
                word.textContent = 'You winn !!'
                newCardBtn.setAttribute('disabled','');
             }
            sumCards.textContent += ' ' + sum 
            clickStart = false;
        } else {
            alert('press "NEW CARD"');
        }
});

// variavel que armazena o botao de NEW CARD
const newCardBtn = document.querySelector('.newCard');

// adicionar o evendo click ao botao NEW CARD
newCardBtn.addEventListener('click', () => {
    if(clickStart === false) {
        card = Math.floor(Math.random() * 11+1);
        sum += card;
        sumCards.textContent = 'Sum: ' + sum;
        myHands.textContent += ' + ' + card;
        if(sum <= 21) {
            if(sum === 21){
                var word = document.querySelector(".congratsWord");
                word.textContent = 'you winn !!';

                // desabilita o botao caso o jogo acabe
                newCardBtn.setAttribute('disabled','');
             }
        } else {
            var word = document.querySelector(".lostsWord");
            word.textContent = 'Oh sorry, good luck next time!';
            
            // desabilita o botao caso o jogo acabe
            newCardBtn.setAttribute('disabled','');
        } 
    }
})

