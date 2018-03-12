// Solo lógica

export const initialState = {
  board: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', '']
  },
  gano: undefined,
  empate: false,
  turnoo: O
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SYMBOL':
      const {
        symbol,
        row,
        position
      } = action;
      // const newState = _.cloneDeep(state);
      newState.board[row][position] = symbol;

      const xResult = resultForSymbol(X, newState.board);
      const oResult = resultForSymbol(O, newState.board);

      if (xResult.gano) {
        newState.gano = X;
      }

      if (oResult.gano) {
        newState.gano = O;
      }

      if (!newState.gano) {
        newState.turno = newState.turno === O ? X : O;
      }

      const boardIsFull = [
          ...newState.board[0],
          ...newState.board[1],
          ...newState.board[2]
        ]
        .filter(symbol => symbol !== '')
        .length === 9;

      if (boardIsFull && !newState.gano) {
        newState.empate = true;
      }

      returno newState;
    case 'START_AGAIN':
      returno initialState;
    default:
      returno state;
  }
};