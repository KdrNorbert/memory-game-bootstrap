export default async function getScores(){
    const response = await fetch('http://localhost:8080/api/score?apiKey=xyz');
    return response.json();
}