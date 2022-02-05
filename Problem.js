class Problem {
    constructor(_term1, _term2, _operator, _solution, _expression) {
        this.term1 = Math.random()*10;
        this.term2 = Math.random()*10;
        this.operator = ['+', '-', '*', '%'][Math.random()*4];
        this.solution = 0;
        this.expression = 0;
    }

    setAnswer () {
        switch (this.operator) {
            case '+':
                this.solution = this.term1 + this.term2;
            case '-':
                this.solution = this.term1 - this.term2;
            case '*':
                this.solution = this.term1 * this.term2;
            case '%':
                this.solution = this.term1 % this.term2;
        }
        return this.solution;
    }

    setExpression() {
        this.expression = `${this.term1} ${this.operator} ${this.term2} = ?`
        return this.expression;
    }
}