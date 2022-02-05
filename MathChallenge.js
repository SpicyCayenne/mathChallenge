class MathChallenge {
    play() {
        let problem = new Problem();
        let score = 0;
        document.getElementById('problem').innerText = problem.setExpression();
        document.getElementById('playAgain').addEventListener('click', function (e) {
            score = 0;
            problem = new Problem();
            document.getElementById('problem').innerText = problem.setExpression();
            document.getElementById('myAnswer').value = null;
            document.getElementById('endGame').style.display = 'none';
            document.getElementById('question').style.display = 'flex';
        })
        document.getElementById('submit').addEventListener('click',function(e) {
            let myAnswer = parseInt(document.getElementById('myAnswer').value);
            let correctAnswer = problem.setAnswer();
            if (myAnswer === correctAnswer) {
                score++;
                problem = new Problem();
                document.getElementById('problem').innerText = problem.setExpression();
                document.getElementById('myAnswer').value = null;
            } else {
                document.getElementById('endGame').style.display = 'flex';
                document.getElementById('question').style.display = 'none';
                document.getElementById('message').innerText = `Game Over! Correct answer was ${correctAnswer}\rScore: ${score}`;
            }
        }
        )
    }
}