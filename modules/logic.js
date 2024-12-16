import { enToMorseObj, morseToEnObj } from '../assets/morse-code.js';
const MORSEDELIM = ' | ';

export const engToMorse = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Argument must be a string');
  }
  const strArr = strToArr(string, ' ');
  const morseStr = strArr.reduce(engWordsToMorse, '');
  return morseStr;
};

const strToArr = (str, delimiter) => {
  const arr = str.split(delimiter);
  const filterArr = arr.filter((value) => {
    if (value !== '') {
      return value;
    }
  });
  return filterArr;
};

const engWordsToMorse = (accWords, currWord, wordIndex, wordArr) => {
  const letters = currWord.split('');
  accWords += letters.reduce(engLettersToMorse, '');
  if (wordIndex !== wordArr.length - 1) {
    accWords += MORSEDELIM;
  }
  return accWords;
};

const engLettersToMorse = (accLetters, currLetter, letterIndex, letterArr) => {
  accLetters += enToMorseObj[parseEngLetter(currLetter)];
  if (letterIndex !== letterArr.length - 1) {
    accLetters += ' ';
  }
  return accLetters;
};

const parseEngLetter = (letter) => {
  if (letter.toUpperCase() !== letter.toLowerCase()) {
    return letter.toUpperCase();
  }
  if (enToMorseObj[letter] === undefined) {
    return 'UNKNOWN';
  }
  return letter;
};

export const morseToEng = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Argument must be a string');
  }
  const strArr = strToArr(string, MORSEDELIM);
  const morseStr = strArr.reduce(morseWordsToEng, '');
  return morseStr;
};

// Split each morse code 'word' into 'letters' due to how the string was split with a delimiter
// some 'words' can exist as empty values
const morseWordsToEng = (accWords, currWord, wordIndex, wordArr) => {
  const letters = strToArr(currWord, ' ');
  if (letters.every((value) => value === ' ')) {
    return accWords;
  }
  accWords += letters.reduce(morseLettersToEng, '');
  if (wordIndex !== wordArr.length - 1) {
    accWords += ' ';
  }
  return accWords;
};

// Anything that can't be parsed from morse code will return a unicode value
const morseLettersToEng = (accLetters, currLetter) => {
  if (morseToEnObj[currLetter] === undefined) {
    accLetters += morseToEnObj['UNKNOWN'];
  } else {
    accLetters += morseToEnObj[currLetter];
  }
  return accLetters;
};
