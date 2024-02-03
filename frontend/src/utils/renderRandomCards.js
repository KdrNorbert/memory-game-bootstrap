export default function renderRandomCards(cardsArray, frontCardsArray, divArray){
    let randomCards = cardsArray.sort((a, b) => 0.5 - Math.random());

    frontCardsArray.forEach((htmlCard, i) =>{
        htmlCard.src = `${randomCards[i][1]}`;
        divArray[i].setAttribute('identifier', `${cardsArray[i][0]}`);
    })
}