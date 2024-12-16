import { engToMorse, morseToEng } from './modules/logic.js';

const engInput = document.getElementById('engInput');
const morseInput = document.getElementById('morseInput');

engInput.addEventListener('keyup', () => {
  const input = engInput.value;
  morseInput.value = engToMorse(input);
});
morseInput.addEventListener('keyup', () => {
  const input = morseInput.value;
  engInput.value = morseToEng(input);
});
