const MORSEDELIM = ' | ';
const BINARYDELIM = ' 00100000 ';
const ERRCHAR = '\u{FFFD}';

export const inputToOutput = (string, obj, type) => {
  const delimObj = getDelimiters(type);
  const wordsArr = stringClean(string, delimObj.inWord);
  const tlWordsArr = wordsArr.reduce((newArr, word) => {
    const trimmedWord = word.trim();
    if (trimmedWord === '') {
      return newArr;
    }
    const lettersArr = trimmedWord.split(delimObj.inLtr);
    const tlLettersArr = lettersArr.reduce((lArr, letter) => {
      if (letter === '') {
        return lArr;
      }
      let tlLetter = letter;
      if (obj.type !== 'textToBinary') {
        tlLetter = letter.toUpperCase();
      }
      lArr.push(obj[tlLetter] ?? ERRCHAR);
      return lArr;
    }, []);
    newArr.push(tlLettersArr.join(delimObj.outLtr));
    return newArr;
  }, []);
  return tlWordsArr.join(delimObj.outWord);
};

const getDelimiters = (type) => {
  switch (type) {
    case 'textToMorse':
      return {
        inWord: ' ',
        outWord: MORSEDELIM,
        inLtr: '',
        outLtr: ' ',
      };
    case 'textToBinary':
      return {
        inWord: ' ',
        outWord: BINARYDELIM,
        inLtr: '',
        outLtr: ' ',
      };
    case 'binaryToText':
      return {
        inWord: BINARYDELIM,
        outWord: ' ',
        inLtr: ' ',
        outLtr: '',
      };
    case 'binaryToMorse':
      return {
        inWord: BINARYDELIM,
        outWord: MORSEDELIM,
        inLtr: ' ',
        outLtr: ' ',
      };
    case 'morseToText':
      return {
        inWord: MORSEDELIM,
        outWord: ' ',
        inLtr: ' ',
        outLtr: '',
      };
    case 'morseToBinary':
      return {
        inWord: MORSEDELIM,
        outWord: BINARYDELIM,
        inLtr: ' ',
        outLtr: ' ',
      };
  }
};

export const checkOutput = (string) => {
  if (string.includes(ERRCHAR)) {
    throw new error('Your input contains characters that could not be decoded');
  }
  return string;
};
const stringClean = (str, delimiter) => {
  const arr = str.split(delimiter);
  const filterArr = arr.filter((value) => {
    if (value !== '') {
      return value;
    }
  });
  return filterArr;
};
