import { disableOptions, updateTextElements } from './modules/dom.js';
import {
  textToMorse,
  morseToText,
  textToBinary,
  binaryToText,
  binaryToMorse,
  morseToBinary,
} from './modules/logic.js';

const topInput = document.getElementById('topInput');
const bottomInput = document.getElementById('bottomInput');
const topSelector = document.getElementById('topSelector');
const bottomSelector = document.getElementById('bottomSelector');
const topOptions = topSelector.querySelectorAll('option');
const bottomOptions = bottomSelector.querySelectorAll('option');

topInput.addEventListener('keyup', () => {
  const input = topInput.value;
  bottomInput.value = textToMorse(input);
});
bottomInput.addEventListener('keyup', () => {
  const input = bottomInput.value;
  topInput.value = morseToText(input);
});

const findFunctions = (top, bottom, selector) => {
  switch (true) {
    case top === 'text' && bottom === 'morse':
      keyPress(textToMorse, morseToText, topInput, bottomInput, selector);
      break;
    case top === 'text' && bottom === 'binary':
      keyPress(textToBinary, binaryToText, topInput, bottomInput, selector);
      break;
    case top === 'morse' && bottom === 'text':
      keyPress(morseToText, textToMorse, topInput, bottomInput, selector);
      break;
    case top === 'morse' && bottom === 'binary':
      keyPress(morseToBinary, binaryToMorse, topInput, bottomInput, selector);
      break;
    case top === 'binary' && bottom === 'text':
      keyPress(binaryToText, textToBinary, topInput, bottomInput, selector);
      break;
    case top === 'binary' && bottom === 'morse':
      keyPress(binaryToMorse, morseToBinary, topInput, bottomInput, selector);
      break;
    default:
      break;
  }
};

topSelector.addEventListener('change', (event) => {
  disableOptions(event, bottomOptions);
  updateTextElements('top', topSelector.value);
  findFunctions(topSelector.value, bottomSelector.value, topSelector.name);
});

bottomSelector.addEventListener('change', (event) => {
  disableOptions(event, topOptions);
  updateTextElements('bottom', bottomSelector.value);
  findFunctions(topSelector.value, bottomSelector.value, bottomSelector.name);
});

const keyPress = (tlTo, tlFrom, input, output, selector) => {
  if (selector === 'topSelector') {
    input.value = tlFrom(output.value);
  } else {
    output.value = tlTo(input.value);
  }
  input.addEventListener('keyup', () => {
    translateText(tlTo, input, output);
  });
  output.addEventListener('keyup', () => {
    translateText(tlFrom, output, input);
  });
};
const translateText = (tlFunction, inputEl, outputEl) => {
  const input = inputEl.value;
  outputEl.value = tlFunction(input);
};
