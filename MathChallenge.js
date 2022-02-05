class MathChallenge {
    play() {
        let problem = new Problem;
        let correctAnswer = problem.setAnswer();
        let myAnswer = document.getElementById('myAnswer').value;

        console.log(problem.setExpression());
    }
}