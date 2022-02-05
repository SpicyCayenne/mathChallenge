class MathChallenge {
    play() {
        let problem = new Problem();
        let score = 0;
        document.getElementById('problem').innerText = problem.getExpression();
        document.getElementById('playAgain').addEventListener('click', () => {
            this.newGame();
        })
        document.getElementById('myAnswer').addEventListener('keyup',(e) => {
            if (e.key === "Enter") {
            this.check(problem, score);}
            }
        )
        document.getElementById('submit').addEventListener('click',() => {
            this.check(problem, score);
            }
        )
    }

    check(theProblem, score) {
        let myAnswer = parseInt(document.getElementById('myAnswer').value);
        let correctAnswer = theProblem.getAnswer();
        if (myAnswer === correctAnswer) {
            theProblem = new Problem();
            document.getElementById('problem').innerText = `Correct!\r${theProblem.getExpression()}`;
            document.getElementById('myAnswer').value = null;
            return score++;
        } else {
            this.gameOver(correctAnswer, score);
        }
    }

    gameOver(correctAnswer, score) {
        document.getElementById('endGame').style.display = 'flex';
        document.getElementById('question').style.display = 'none';
        document.getElementById('message').innerText = `Game Over! Correct answer was ${correctAnswer}\rScore: ${score}`;
    }

    newGame() {
        document.getElementById('endGame').style.display = 'none';
        document.getElementById('question').style.display = 'flex';
        document.getElementById('myAnswer').value = null;
        return this.play();
    }
}