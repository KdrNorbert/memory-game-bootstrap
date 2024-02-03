import renderRandomCards from "./renderRandomCards.js";
import { cards } from "./cards.js";
import renderScores from "./renderScores.js";
import flipCard from "./flipCard.js";

const cardsDiv = document.querySelectorAll('.card');
const frontCards = document.querySelectorAll('.front-card');
const scoreTable = document.querySelector('tbody');
const missedCounter = document.querySelector('.counter');

export default function restartGameWithNoSave(){
    const gameArea = document.querySelector('.game-area');
    const allCards = document.querySelectorAll('.card');
    const winContainer = document.querySelector('.win');
    
    allCards.forEach((card) => {
        card.style.removeProperty = ('transform');
        card.style.removeProperty = ('transform');
        card.classList.remove('found');
    })
    
    gameArea.style.display = 'grid';
    winContainer.remove();

    renderRandomCards(cards, frontCards, cardsDiv);
    renderScores(scoreTable);
}