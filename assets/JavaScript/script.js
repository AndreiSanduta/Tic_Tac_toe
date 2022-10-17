// Wait for the DOM to finish loading before running the game 
// Get the button elements add event listners to them 

addEventListener('DOMContentLoaded', () => {
    const cel = Array.from(document.getElementById('cel'));
    const player =document.getElementById('player');
    const reset = document.querySelector('#reset');
    const resoult = document.getElementById('resoult');

    var gameArea = ['', '', '', '', '', '', '', '', '',];
    var currentPlayer = 'X';
    var isGameActive = true;

    /*This constants represents the messages that will pop up when the game finis and 
    it will show the final resoult of the game. */

    const PLAYER_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYER0_WON';
    const tie ='TIE'

    /*
        Game area is represented in this way 
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */
    
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 3, 8],
        [2, 4, 6],
    ];

    function resoultValidation() {
        roundWon = false;
        for (let i = 0; i <=7; i++) {
            const winCondition = winningConditions[i];
            const fHypothesis = board[winCondition[0]];
            const sHypothesis = board[winCondition[1]];
            const tHypothesis = board[winCondition[2]];
            if (fHypothesis === '' || sHypothesis === '' || tHypothesis === '') {
                continue; 
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
            resoult(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false; 
            return;
        }

        if(!board.includes(''))
        resoult(TIE);
    }

    const annonce = (type) => {
        switch(type) {
            case PLAYERO_WON:
            resoult.innerHTML = 'player <div class="player0">0</div> Won';
            break;
            case PLAYERX_WON:
            resoult.innerHTML = 'player <div id="playerX">X</div> Won';
            break;  
            case TIE: 
            resoult.innerHTML = `It's a Tie!`
        };

        
    }









    
});

