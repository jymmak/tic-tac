
export const SQUARE_CLICK = 'SQUARE_CLICK';
export const HISTORY_LIST_CLICK = 'HISTORY_LIST_CLICK';

export const squareClick = (index) => {
    return {
        type: SQUARE_CLICK,
        squareIndex: index
    }
}

export const historyListClick = (index) => {
    return {
        type: HISTORY_LIST_CLICK,
        historyListIndex: index
    }
}

export const turnChangeAnimation = () => {
    let gameStatus = document.getElementById('status');
    gameStatus.className = 'turnChange';
    setTimeout(() => {
        gameStatus.className = '';
    }, 250)
};