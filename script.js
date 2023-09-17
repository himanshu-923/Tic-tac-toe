const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';
let gameOver = false;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!gameOver && cell.textContent === '') {
            cell.textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
});

restartButton.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    gameOver = false;
});

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            gameOver = true;
            setTimeout(() => alert(`Player ${currentPlayer} wins!`), 10);
        }
    }

    if (!gameOver && [...cells].every(cell => cell.textContent !== '')) {
        gameOver = true;
        setTimeout(() => alert('It\'s a draw!'), 10);
    }
}
