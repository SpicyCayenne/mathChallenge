let game = new MathChallenge();
function newGame() {
    document.getElementById('endGame').style.display = 'none';
    document.getElementById('question').style.display = 'flex';
    document.getElementById('myAnswer').value = null;
    location.reload();
}
document.getElementById('playAgain').addEventListener('click', () => {
    newGame();
})
game.play();