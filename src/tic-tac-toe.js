class TicTacToe {
    constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.winner = null;
        this.currentPlayer = 'x';
        this.steps = 0;
    }

    getCurrentPlayerSymbol() {

        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] !== null) {
            return false;
        }
        this.matrix[rowIndex][columnIndex] = this.currentPlayer;
        this.steps++;
        if (this.steps >= 5) {
            this.check();
        }
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';

    }

    check() {
        const row1 = this.matrix[0].join('');
        const row2 = this.matrix[1].join('');
        const row3 = this.matrix[2].join('');
        const column1 = [this.matrix[0][0], this.matrix[1][0], this.matrix[2][0]].join('');
        const column2 = [this.matrix[0][1], this.matrix[1][1], this.matrix[2][1]].join('');
        const column3 = [this.matrix[0][2], this.matrix[1][2], this.matrix[2][2]].join('');
        const leftDiagonal = [this.matrix[0][0], this.matrix[1][1], this.matrix[2][2]].join('');
        const rightDiagonal = [this.matrix[0][2], this.matrix[1][1], this.matrix[2][0]].join('');
        const allCombinations = [];
        allCombinations.push(row1,row2,row3,column1,column2,column3,leftDiagonal,rightDiagonal);
        if(allCombinations.includes('xxx')){
            this.winner = 'x';
        }
        if(allCombinations.includes('ooo')){
            this.winner = 'o';
        }
        
    }

    isFinished() {
        return this.winner !== null || this.isDraw();
    }

    getWinner() {
        return this.winner;

    }

    noMoreTurns() {
        const flatMatrix = this.matrix.reduce(function (el, acc) {
            return el.concat(acc);
        });

        return !flatMatrix.includes(null);
    }

    isDraw() {

        return this.noMoreTurns() && this.winner === null;
    }

    getFieldValue(rowIndex, colIndex) {

        return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
