import { makeAutoObservable } from 'mobx';
import GameGrid from './GameGrid';

export default class GameInfo {
  history = [new GameGrid()];

  currentStep = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get historyLength() {
    return this.history.length;
  }

  get currentGameGrid() {
    return this.history[this.currentStep];
  }

  get currentPlayer() {
    return this.currentStep % 2 === 0 ? 'X' : 'O';
  }

  get isMatchDone() {
    return this.currentGameGrid.isMatchDone;
  }

  get isMatchNull() {
    return this.currentGameGrid.isMatchNull;
  }

  get winner() {
    return this.isMatchDone && !this.isMatchNull
      ? this.currentGameGrid.winnerId
      : null;
  }

  get statusTitle() {
    if (this.winner !== null) {
      return `${this.winner} a gagné !`;
    } if (this.isMatchNull) {
      return 'Match nul !';
    }
    return `C'est à ${this.currentPlayer} de jouer`;
  }

  playATurn(idxSquare) {
    // Précondition : match non terminé, et que la case idxSquare ne soit pas déjà remplie
    if (this.isMatchDone || this.currentGameGrid.squares[idxSquare] !== null) {
      return;
    }
    // Création d'une nouvelle grille dans l'historique
    const newGrid = this.currentGameGrid.createCopy();
    newGrid.squares[idxSquare] = this.currentPlayer;
    // ajouter dans l'historique et change currentStep
    // enlever tous les éléments dont l'indice est >= currentStep + 1
    // ajouter (à la position currentStep +1) la nouvelle grille
    this.history.splice(this.currentStep + 1, this.history.length, newGrid);
    // Incrémenter l'étape de jeu
    this.currentStep += 1;
  }

  changeStep(stepIdx) {
    if (stepIdx < 0 || stepIdx >= this.historyLength) {
      console.error("Indice d'historique invalide.");
      return;
    }
    this.currentStep = stepIdx;
  }
}
