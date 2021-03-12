import { PLAY_TURN, CHANGE_STEP } from '../actions';

const MATCHNUL = -1;

const initialGameState = {
  history: [{ squares: Array(9).fill(null), winner: null }],
  stepNumber: 0,
  status: "C'est à X de jouer",
  matchnulIndicator: MATCHNUL,
};

function calculateWinner(tabValues) {
  const tripletsIndices = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // lignes
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // colonnes
    [0, 4, 8],
    [2, 4, 6], // diagonales
  ];

  // Parcours des triplet
  for (const triplet of tripletsIndices) {
    // Test si toutes les cases sont les même et différentes de null
    const premiereVal = tabValues[triplet[0]];
    if (premiereVal !== null && triplet.every((i) => tabValues[i] === premiereVal)) {
      // On a un gagnant !
      return premiereVal;
    }
  }

  // Vérification du match null
  if (tabValues.every((v) => v !== null)) {
    // Aucune case n'est null : match nul
    return MATCHNUL;
  }
  // Encore une case vide : le match continue !
  return null;
}

function getCurrentSquares(state) {
  return state.history[state.stepNumber].squares;
}

function currentPlayer(state) {
  return state.stepNumber % 2 === 0 ? 'X' : 'O';
}

function getCurrentWinner(state) {
  return state.history[state.stepNumber].winner;
}

function calculateStatus(currentWinner, stepNumber) {
  if (currentWinner !== null) {
    if (currentWinner === MATCHNUL) {
      return 'Match nul !';
    }
    return `${currentWinner} a gagné !`;
  }
  return `C'est à ${stepNumber % 2 === 0 ? 'X' : 'O'} de jouer`;
}

function playTurn(state, idxSquare) {
  if (getCurrentWinner(state) !== null
    || getCurrentSquares(state)[idxSquare] !== null) {
    return state;
  }

  const newTabSquares = getCurrentSquares(state).slice();
  newTabSquares[idxSquare] = currentPlayer(state);
  const newWinner = calculateWinner(newTabSquares);
  const newStateNumber = state.stepNumber + 1;
  const newHistory = [
    ...state.history.slice(0, newStateNumber), {
      squares: newTabSquares,
      winner: newWinner,
    },
  ];
  return {
    ...state,
    history: newHistory,
    stepNumber: newStateNumber,
    status: calculateStatus(newWinner, newStateNumber),
  };
}

function changeStep(state, stepNumber) {
  const histoLen = state.history.length;
  if (stepNumber < 0 || stepNumber >= histoLen) {
    return state;
  }

  return {
    ...state,
    stepNumber,
    status: calculateStatus(state.history[stepNumber].winner, stepNumber),
  };
}

function gameReducer(state = initialGameState, action) {
  switch (action.type) {
    case PLAY_TURN:
      return playTurn(state, action.idxSquare);
    case CHANGE_STEP:
      return changeStep(state, action.stepIdx);
    default:
      return state;
  }
}

export default gameReducer;
