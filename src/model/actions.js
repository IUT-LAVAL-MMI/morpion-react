export const PLAY_TURN = 'PLAY_TURN';
export const CHANGE_STEP = 'CHANGE_STEP';

export function playTurn(idxSquare) {
  return {
    type: PLAY_TURN,
    idxSquare,
  };
}

export function changeStep(stepIdx) {
  return {
    type: CHANGE_STEP,
    stepIdx,
  };
}
