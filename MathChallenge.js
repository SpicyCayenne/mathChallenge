class mathChallenge {
    constructor() {
        this.answer = document.getElementById(myAnswer).value;
    }

    check() {
        return this.answer === getAnswer();
    }

}

let challenge = new Problem()
document.getElementById('problem').innerText = challenge.setExpression();
document.getElementById('submit').addEventListener('click', something.check());