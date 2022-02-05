class Problem {
    constructor() {
        this.term1 = Math.random()*10;
        this.term2 = Math.random()*10;
        this.operator = ['+', '-', '*', '%'][Math.random()*4];
        this.solution = 0;
        this.expression = 0;
    }

    setAnswer () {
        switch (this.operator) {
            case '+':
                return this.term1 + this.term2;
            case '-':
                return this.term1 - this.term2;
            case '*':
                return this.term1 * this.term2;
            case '%':
                return this.term1 % this.term2;
        }
    }

    getAnswer() {
        this.solution = this.setAnswer();
        return this.solution;
    }

    setExpression() {
        this.expression = `${this.term1} ${this.operator} ${this.term2} = ?`
        return this.expression;
    }
}