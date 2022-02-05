class Problem {
    
    constructor(_term1, _term2, _operator, _solution, _expression) {
        this.term1 = Math.round(Math.random()*100);
        this.term2 = Math.round(Math.random()*100);
        this.operator = ['+', '-', '*', '%'][Math.round(Math.random()*3)];
        this.solution = 0;
        this.expression = 0;
    }

    getAnswer () {
        switch (this.operator) {
            case '+':
                this.solution = this.term1 + this.term2;
                break;
            case '-':
                this.solution = this.term1 - this.term2;
                break;
            case '*':
                this.solution = this.term1 * this.term2;
                break;
            case '%':
                this.solution = this.term1 % this.term2;
                break;
        }
        return this.solution;
    }

    getExpression() {
        this.expression = `${this.term1} ${this.operator} ${this.term2} = ?`
        return this.expression;
    }
}