export const enToMorseObj = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  '&': '.-...',
  "'": '.----.',
  '@': '.--.-.',
  ')': '-.--.-',
  '(': '-.--.',
  ':': '---...',
  ',': '--..--',
  '=': '-...-',
  '.': '.-.-.-',
  '-': '-....-',
  '+': '.-.-.',
  '"': '.-..-.',
  '?': '..--..',
  '/': '-..-.',
  '!': '-.-.--',
  UNKNOWN: '\u{FFFD}',
};

const morseArr = Object.entries(enToMorseObj);
export const morseToEnObj = morseArr.reduce((acc, curr) => {
  if (curr[0] === 'UNKNOWN') {
    acc[curr[0]] = curr[1];
  } else {
    acc[curr[1]] = curr[0];
  }
  return acc;
}, {});

// export const morseToEn = {
//   '.-': 'A',
//   '-...': 'B',
//   '-.-.': 'C',
//   '-..': 'D',
//   '.': 'E',
//   '..-.': 'F',
//   '--.': 'G',
//   '....': 'H',
//   '..': 'I',
//   '.---': 'J',
//   '-.-': 'K',
//   '.-..': 'L',
//   '--': 'M',
//   '-.': 'N',
//   '---': 'O',
//   '.--.': 'P',
//   '--.-': 'Q',
//   '.-.': 'R',
//   '...': 'S',
//   '-': 'T',
//   '..-': 'U',
//   '.--': 'W',
//   '-..-': 'X',
//   '-.--': 'Y',
//   '--..': 'Z',
//   UNKNOWN: '\u{FFFD}',
// };
// 0-9 and symbols