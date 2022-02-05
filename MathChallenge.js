class MathChallenge {
    play() {
        let problem = new Problem();
        let score = 0
        document.getElementById('problem').innerText += problem.getExpression();
        document.getElementById('submit').addEventListener('click', function (e) {
            let myAnswer = parseInt(document.getElementById('myAnswer').value);
            let correctAnswer = problem.getAnswer();
            if (myAnswer === correctAnswer) {
                document.getElementById('problem').innerText = `Correct!\r`;
                document.getElementById('myAnswer').value = null;
                score++;
                problem = new Problem();
                document.getElementById('problem').innerText += problem.getExpression();
            } else {
                document.getElementById('problem').innerText = '';
                document.getElementById('endGame').style.display = 'flex';
                document.getElementById('question').style.display = 'none';
                document.getElementById('message').innerText = `Game Over! Correct answer was ${correctAnswer}\rScore: ${score}`;
            }
        });
    }


    /*check(theProblem) {
        let myAnswer = parseInt(document.getElementById('myAnswer').value);
        let correctAnswer = theProblem.getAnswer(); //on the second round, this is still using the value from the first round
        if (myAnswer === correctAnswer) {
            document.getElementById('problem').innerText = `Correct!\r`;
            document.getElementById('myAnswer').value = null;
            this.score++
            return this.play();
        } else {
            this.gameOver(correctAnswer, this.score);
        }
    }*/

    gameOver(correctAnswer) {
        document.getElementById('problem').innerText = '';
        document.getElementById('endGame').style.display = 'flex';
        document.getElementById('question').style.display = 'none';
        document.getElementById('message').innerText = `Game Over! Correct answer was ${correctAnswer}\rScore: ${this.score}`;
    }
}