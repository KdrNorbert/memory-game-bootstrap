import restartGameWithNoSave from "./restartNoSave.js";
import restartGameAndSave from "./restartAndSave.js";


let misses;
let moves;
let cardFlipCounter;
let pickedCard;

export default function flipCard(cardsDiv, missCounter){

    misses = 0;
    moves = 0;
    cardFlipCounter = 0;
    pickedCard = '';

    cardsDiv.forEach((card) =>{
     
        card.addEventListener('click', () => {
            cardFlipCounter ++;
            
            card.style.transform = 'rotateY(180deg)';
            card.classList.add('flipped');
            
            if (cardFlipCounter === 2 && pickedCard !== card.attributes.identifier.nodeValue) {
                const flippedCards = document.querySelectorAll('.flipped');

                misses = misses + 1;
                moves = moves + 1;

                console.log('current moves: ', moves);
                console.log('current misses: ', misses);
                
                setTimeout(() => {
                    flippedCards.forEach((flippedCard) => {
                            flippedCard.style.transform = '';
                            flippedCard.classList.remove('flipped');
                            missCounter.innerText = `Missed flips: ${misses}`;
                            cardFlipCounter = 0;
                        })
                }, 1000)
            }
            else if (cardFlipCounter === 2 && pickedCard === card.attributes.identifier.nodeValue) {
                const flippedCards = document.querySelectorAll('.flipped');

                moves = moves + 1;

                console.log('current moves: ', moves);

                    flippedCards.forEach((flippedCard) => {
                    setTimeout(() => {
                        flippedCard.classList.add('found');
                        flippedCard.classList.remove('flipped');
                        flippedCard.style.transform = '';
                    }, 500);
                    cardFlipCounter = 0;
                })

                setTimeout(() => {
                    renderWin(missCounter, cardsDiv);
                    console.log('misses: ', `${misses}`);
                    console.log('all moves: ', `${moves}`);
                }, 1001)
            }
            pickedCard = card.attributes.identifier.nodeValue;
        })
    })
}

function renderWin(missCounter, cards){

    cards.forEach((card) => {
        card.style.transform = '';
    })

    const foundCards = document.querySelectorAll('.found');

    if (foundCards.length === 16) {
        const gameWinContainer = document.querySelector('.game-win-container');
        const gameArea = document.querySelector('.game-area');
        gameArea.style.display = 'none';

        const winContainer = document.createElement('div');
        const h3Congration = document.createElement('h3');
        const h3Text = document.createElement('h3');
        const btnContainer = document.createElement('div');
        const restartNoSaveBtn = document.createElement('button');
        const restartAndSaveBtn = document.createElement('button');
        const p = document.createElement('p');
        const img = document.createElement('img');

        winContainer.classList.add('win');
        restartNoSaveBtn.classList.add('no-save-btn');
        restartAndSaveBtn.classList.add('save-btn');

        h3Congration.innerText = '🎉Congratulation!🎉';

        if (misses === 0) {
            h3Text.innerText = `Congratulation you haven't missed any move!`
        } else if (misses > 0){
            h3Text.innerText = `You only missed ${misses} moves. Do you want to save your score?`;
        }


        restartNoSaveBtn.innerText = 'Play again';
        restartAndSaveBtn.innerText = 'Save score and play again';
        p.innerText = 'See the scorebord below'

        img.setAttribute('alt', 'down-arrow');
        img.setAttribute('src', './img/white-arrow.png');

        restartNoSaveBtn.addEventListener('click', () => {            
            restartGameWithNoSave();
            misses = 0;
        moves = 0;
        cardFlipCounter = 0;
        pickedCard = '';
            missCounter.innerText = `Missed flips: ${misses}`;
        });

        restartAndSaveBtn.addEventListener('click', ()=> {
            restartGameAndSave(misses, moves);
            misses = 0;
            moves = 0;
            cardFlipCounter = 0;
            pickedCard = '';
            
            missCounter.innerText = `Missed flips: ${misses}`;
        })

        btnContainer.append(restartNoSaveBtn, restartAndSaveBtn);
        winContainer.append(h3Congration, h3Text, btnContainer, p, img);
        gameWinContainer.append(winContainer);
    }
}