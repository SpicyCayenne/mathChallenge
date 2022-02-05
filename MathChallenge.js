class MathChallenge {
    constructor() {
        this.score = 0;
    }
    play() {
        let problem = new Problem();
        document.getElementById('problem').innerText += problem.getExpression();

        document.getElementById('myAnswer').addEventListener('keyup',(e) => {
            if (e.key === "Enter") {
                this.check(problem);}
            }
        )
        document.getElementById('submit').addEventListener('click', (e) => {this.check(problem)});
    }

    check(theProblem) {
        let myAnswer = parseInt(document.getElementById('myAnswer').value);
        let correctAnswer = theProblem.getAnswer(); //on the second round, this is still using the value from the first round
        if (myAnswer === correctAnswer) {
            document.getElementById('problem').innerText = `Correct!\r`;
            document.getElementById('myAnswer').value = null;
            document.getElementById('myAnswer').removeEventListener('keyup',(e) => {
                if (e.key === "Enter") {
                    this.check(problem);}
                }
            )
            document.getElementById('submit').removeEventListener('click',() => {
                this.check(problem);
                }
            )
            this.score++
            this.play();
        } else {
            this.gameOver(correctAnswer, this.score);
        }
    }

    gameOver(correctAnswer, score) {
        document.getElementById('problem').innerText = '';
        document.getElementById('endGame').style.display = 'flex';
        document.getElementById('question').style.display = 'none';
        document.getElementById('message').innerText = `Game Over! Correct answer was ${correctAnswer}\rScore: ${this.score}`;
    }
}