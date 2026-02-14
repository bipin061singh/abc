// Snake Game Core Logic
class SnakeGame {
    constructor() {
        this.boardSize = 20;
        this.cellSize = 20;
        this.gameBoard = document.getElementById('gameBoard');
        this.scoreElement = document.getElementById('score');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        
        this.snake = [];
        this.direction = { x: 1, y: 0 };
        this.nextDirection = { x: 1, y: 0 };
        this.food = null;
        this.score = 0;
        this.gameRunning = false;
        this.gamePaused = false;
        this.gameLoop = null;
        this.lastRenderTime = 0;
        
        this.initializeBoard();
        this.setupEventListeners();
    }
    
    initializeBoard() {
        this.gameBoard.innerHTML = '';
        for (let row = 0; row < this.boardSize; row++) {
            for (let col = 0; col < this.boardSize; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.dataset.row = row;
                cell.dataset.col = col;
                this.gameBoard.appendChild(cell);
            }
        }
    }
    
    setupEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.pauseBtn.addEventListener('click', () => this.togglePause());
        
        document.addEventListener('keydown', (e) => {
            if (!this.gameRunning || this.gamePaused) return;
            
            switch(e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    if (this.direction.y === 0) {
                        this.nextDirection = { x: 0, y: -1 };
                    }
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    if (this.direction.y === 0) {
                        this.nextDirection = { x: 0, y: 1 };
                    }
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    if (this.direction.x === 0) {
                        this.nextDirection = { x: -1, y: 0 };
                    }
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    if (this.direction.x === 0) {
                        this.nextDirection = { x: 1, y: 0 };
                    }
                    break;
            }
        });
    }
    
    startGame() {
        if (this.gameRunning) return;
        
        this.gameRunning = true;
        this.gamePaused = false;
        this.score = 0;
        this.direction = { x: 1, y: 0 };
        this.nextDirection = { x: 1, y: 0 };
        this.snake = [{ x: 10, y: 10 }];
        
        this.updateScore();
        this.placeFood();
        this.render();
        
        this.gameLoop = setInterval(() => this.gameStep(), 100);
        this.startBtn.disabled = true;
        this.pauseBtn.disabled = false;
    }
    
    togglePause() {
        if (!this.gameRunning) return;
        
        this.gamePaused = !this.gamePaused;
        this.pauseBtn.textContent = this.gamePaused ? 'Resume' : 'Pause';
    }
    
    gameStep() {
        if (this.gamePaused) return;
        
        this.direction = { ...this.nextDirection };
        const head = { ...this.snake[0] };
        head.x += this.direction.x;
        head.y += this.direction.y;
        
        if (this.checkCollision(head)) {
            this.gameOver();
            return;
        }
        
        this.snake.unshift(head);
        
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.updateScore();
            this.placeFood();
        } else {
            this.snake.pop();
        }
        
        this.render();
    }
    
    checkCollision(head) {
        if (head.x < 0 || head.x >= this.boardSize ||
            head.y < 0 || head.y >= this.boardSize) {
            return true;
        }
        
        for (let i = 1; i < this.snake.length; i++) {
            if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
                return true;
            }
        }
        
        return false;
    }
    
    placeFood() {
        do {
            this.food = {
                x: Math.floor(Math.random() * this.boardSize),
                y: Math.floor(Math.random() * this.boardSize)
            };
        } while (this.snake.some(segment => segment.x === this.food.x && segment.y === this.food.y));
    }
    
    render() {
        const cells = this.gameBoard.querySelectorAll('.cell');
        
        cells.forEach(cell => {
            cell.className = 'cell';
            const row = parseInt(cell.dataset.row);
            const col = parseInt(cell.dataset.col);
            
            if (this.snake.some(segment => segment.x === col && segment.y === row)) {
                cell.classList.add('snake');
            }
            
            if (this.food && this.food.x === col && this.food.y === row) {
                cell.classList.add('food');
            }
        });
    }
    
    updateScore() {
        this.scoreElement.textContent = this.score;
    }
    
    gameOver() {
        clearInterval(this.gameLoop);
        this.gameRunning = false;
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.pauseBtn.textContent = 'Pause';
        
        setTimeout(() => {
            alert(`Game Over! Your score: ${this.score}`);
        }, 100);
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SnakeGame();
});