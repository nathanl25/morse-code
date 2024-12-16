import {
  engToMorse,
  morseToEng,
  textToBinary,
  binaryToText,
} from './modules/logic.js';

const engInput = document.getElementById('engInput');
const morseInput = document.getElementById('morseInput');
const selector = document.getElementById('morseSelector');

engInput.addEventListener('keyup', () => {
  const input = engInput.value;
  morseInput.value = engToMorse(input);
});
morseInput.addEventListener('keyup', () => {
  const input = morseInput.value;
  engInput.value = morseToEng(input);
});

selector.addEventListener('change', (event) => {
  if (event.target.value === 'binary') {
    morseInput.value = textToBinary(engInput.value);
    engInput.addEventListener('keyup', () => {
      const input = engInput.value;
      morseInput.value = textToBinary(input);
    });
    morseInput.addEventListener('keyup', () => {
      const input = morseInput.value;
      console.log(binaryToText(input));
      engInput.value = binaryToText(input);
    });
  } else {
    morseInput.value = engToMorse(engInput.value);
    engInput.addEventListener('keyup', () => {
      const input = engInput.value;
      morseInput.value = engToMorse(input);
    });
    morseInput.addEventListener('keyup', () => {
      const input = morseInput.value;
      engInput.value = morseToEng(input);
    });
  }
});
