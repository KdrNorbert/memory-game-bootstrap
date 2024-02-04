import renderRandomCards from "./utils/renderRandomCards.js";
import { cards } from "./utils/cards.js";
import flipCard from "./utils/flipCard.js";
import renderScorers from "./utils/renderScores.js";

const cardsDiv = document.querySelectorAll('.card');
const frontCards = document.querySelectorAll('.front-card');
const missedCounter = document.querySelector('.counter');
const scoreTable = document.querySelector('tbody');

renderScorers(scoreTable);

renderRandomCards(cards, frontCards, cardsDiv);

flipCard(cardsDiv, missedCounter);