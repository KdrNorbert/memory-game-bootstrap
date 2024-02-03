import getScores from "../service/getScores.js";

export default async function renderScorers(tableBody){
    tableBody.innerHTML = '';
    let scores;

    try{
        scores = await getScores();
    } catch (e){
        alert('The scores can not be rendered, because the server is not respondig.');
        scores = [];
    }

    scores.forEach((score) => {
        const tr = document.createElement('tr');
        const date = document.createElement('td');
        const name = document.createElement('td');
        const allFlips = document.createElement('td');
        const missedFlips = document.createElement('td');

        const currentDate = score.createdAt.split('T')

        date.innerText = `${currentDate[0]}`;
        name.innerText = `${score.name}`;
        allFlips.innerText = `${score.successfulFlips}`;
        missedFlips.innerText = `${score.missedFlips}`;

        tr.append(date, name, allFlips, missedFlips);
        tableBody.append(tr);
    })
}