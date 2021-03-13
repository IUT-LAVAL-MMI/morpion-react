const MESSAGES = [
  'Bonjour !',
  'Comment allez-vous ?',
  "C'est super !",
  'Vive le dev !',
];

function fetchRandomMessage(currentIdx = -1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const messageCandidates = MESSAGES.filter((_, i) => i !== currentIdx);
      const selectedIdx = Math.floor(Math.random() * messageCandidates.length);
      resolve({
        idx: selectedIdx,
        message: messageCandidates[selectedIdx],
      });
    }, 500);
  });
}

export default fetchRandomMessage;
