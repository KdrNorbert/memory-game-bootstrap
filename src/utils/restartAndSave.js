import restartGameWithNoSave from "./restartNoSave.js";
import postScore from "../service/postScore.js";

export default async function restartAndSave(misses, allmoves){
    
    const name = prompt('Write your name here.');

    let createPost;

    try{
        createPost = await postScore(misses, allmoves, name);
    }catch (e){
        alert(`The server is not respondig, the score can't be saved, try again later!`)
    }

    restartGameWithNoSave();
}