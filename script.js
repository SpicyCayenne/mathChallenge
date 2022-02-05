let game = new MathChallenge();
function newGame() {
    document.getElementById('endGame').style.display = 'none';
    document.getElementById('question').style.display = 'flex';
    document.getElementById('myAnswer').value = null;
    return this.play();
}
document.getElementById('playAgain').addEventListener('click', () => {
    newGame();
})
game.play();