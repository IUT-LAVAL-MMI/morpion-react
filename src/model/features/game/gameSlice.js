/* eslint no-param-reassign:
["error", {"props": true, "ignorePropertyModificationsFor": ["state"]}] */
// Le commentaire ci-dessus permet de désactiver l'alerte du linter sur la ré-assignation du
// paramètre state, justement autorisé dans les reducers des slices avec redux toolkit

import { createSlice } from '@reduxjs/toolkit';

const MATCHNUL = -1;

/**
 * Calcul le gagnant d'après un tableau de valeur de morpion
 * @param  {Array} tabValues  Le tableau de valeurs
 * @return {str|int}          null (jeu non terminé), MATCHNUL ou symbole du gagnant
 */
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

/**
 * Calcul le message du status selon la gagnant et l'étape du jeu
 * @param  {str|int} currentWinner le gagnant : null (jeu non terminé), MATCHNUL ou symbole
 * @param  {int}     stepNumber    le numéro d'étape (pour déterminer X ou O)
 * @return {str}                   le message de status
 */
function calculateStatus(currentWinner, stepNumber) {
  if (currentWinner !== null) {
    if (currentWinner === MATCHNUL) {
      return 'Match nul !';
    }
    return `${currentWinner} a gagné !`;
  }
  return `C'est à ${stepNumber % 2 === 0 ? 'X' : 'O'} de jouer`;
}

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    history: [{ squares: Array(9).fill(null), winner: null }],
    stepNumber: 0,
    status: "C'est à X de jouer",
    matchnulIndicator: MATCHNUL,
  },
  reducers: {
    playTurn: (state, action) => {
      const idxSquare = action.payload;
      // constantes locales pour faciliter l'écriture ci-après
      const currentWinner = state.history[state.stepNumber].winner;
      const currentSquares = state.history[state.stepNumber].squares;
      const currentPlayer = state.stepNumber % 2 === 0 ? 'X' : 'O';

      // si le match est terminé ou la case déjà selectionnée, on ne fait rien
      if (currentWinner !== null || currentSquares[idxSquare] !== null) {
        return;
      }

      // Création d'un nouveau tableau de carré avec la case nouvellement selectionnée
      const newTabSquares = currentSquares.slice();
      newTabSquares[idxSquare] = currentPlayer;
      // Calcul du nouveau gagnant et de la nouvelle étape
      const newWinner = calculateWinner(newTabSquares);
      const newStepNumber = state.stepNumber + 1;

      // Redux Toolkit permet d'écrire notre logique métier de façon "mutative" :
      // comme si l'on modifiait le state directement (et non pas en en re-créant un).
      // En réalité, le toolkit va detecter les changements et produire automatique un nouveau
      // state immuable.
      // Insertion du nouveau tableau de carré et suppression des suivant dans l'historique
      state.history.splice(newStepNumber, state.history.length, {
        squares: newTabSquares,
        winner: newWinner,
      });
      // Mise à jour dans le state de l'étape et du status
      state.stepNumber = newStepNumber;
      state.status = calculateStatus(newWinner, newStepNumber);
    },
    changeStep: (state, action) => {
      const stepNumber = action.payload;
      const histoLen = state.history.length;
      // Si la stepNumber requise est invalide : ne fait rien
      if (stepNumber < 0 || stepNumber >= histoLen) {
        return;
      }
      // Modification du stepNumber et calcul du nouveau statut
      state.stepNumber = stepNumber;
      state.status = calculateStatus(state.history[stepNumber].winner, stepNumber);
    },
  },
});

// Action creators are generated for each case reducer function
export const { playTurn, changeStep } = gameSlice.actions;

export default gameSlice.reducer;
