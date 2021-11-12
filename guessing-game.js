function guessingGame() {
    const answer = Math.floor(Math.random()*100);
    let count=0;
    let win = false;
    return (guess)=>{
        if (win){
            return `The game is over, you already won!`;
        }
        if (guess > answer){
            count++;
            return `${guess} is too high!`;
        }else if (guess < answer){
            count++;
            return `${guess} is too low!`;
        }else if (guess == answer){
            count++;
            win = true;
            return `You win! You found ${answer} in ${count} guesses.`;
        }
    }
}

module.exports = { guessingGame };
