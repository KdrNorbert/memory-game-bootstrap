export default async function postScore(missedFlips, successfulFlips, name){
    const response = await fetch('http://localhost:8080/api/score?apiKey=xyz', {
        headers: {
            "Content-Type": "application/json",
        },    
        method: 'POST',
        body: JSON.stringify({
            "successfulFlips": successfulFlips,
            "missedFlips": missedFlips,
            "name": name 
        })
    })
    return response.json();
}