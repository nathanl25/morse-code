import { inputToOutput, checkOutput } from './modules/logic.js';
import { textToMorseObj, morseToTextObj } from './assets/morse-code.js';
const engInput = document.getElementById('engInput');
const morseInput = document.getElementById('morseInput');

engInput.addEventListener('keyup', () => {
  const input = engInput.value;
  morseInput.value = inputToOutput(input, textToMorseObj, 'textToMorse');
});
morseInput.addEventListener('keyup', () => {
  const input = morseInput.value;
  engInput.value = inputToOutput(input, morseToTextObj, 'morseToText');
});
