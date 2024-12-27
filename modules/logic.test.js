import { inputToOutput, checkOutput } from './logic.js';
import { textToMorseObj, morseToTextObj } from '../assets/morse-code.js';

describe('English to Morse Code', () => {
  test('textToMorse function should be able to translate letters from A-Z', () => {
    expect(inputToOutput('E', textToMorseObj, 'textToMorse')).toBe('.');
    expect(inputToOutput('MEOW', textToMorseObj, 'textToMorse')).toBe(
      '-- . --- .--'
    );
    expect(inputToOutput('ABCDEF', textToMorseObj, 'textToMorse')).toBe(
      '.- -... -.-. -.. . ..-.'
    );
    expect(inputToOutput('GHIJK', textToMorseObj, 'textToMorse')).toBe(
      '--. .... .. .--- -.-'
    );
    expect(inputToOutput('LMNOP', textToMorseObj, 'textToMorse')).toBe(
      '.-.. -- -. --- .--.'
    );
    expect(inputToOutput('QRSTU', textToMorseObj, 'textToMorse')).toBe(
      '--.- .-. ... - ..-'
    );
    expect(inputToOutput('VWXYZ', textToMorseObj, 'textToMorse')).toBe(
      '...- .-- -..- -.-- --..'
    );
  });
  test('textToMorse function should not modify original string', () => {
    let str = 'test';
    const strToMorse = inputToOutput(str, textToMorseObj, 'textToMorse');
    expect(inputToOutput(str, textToMorseObj, 'textToMorse')).toBe('- . ... -');
    expect(str).not.toBe(strToMorse);
  });
  test('textToMorse function should be able to translate a string of words', () => {
    expect(inputToOutput('MEOW MEOW', textToMorseObj, 'textToMorse')).toBe(
      `-- . --- .-- | -- . --- .--`
    );
    expect(inputToOutput('I love you', textToMorseObj, 'textToMorse')).toBe(
      `.. | .-.. --- ...- . | -.-- --- ..-`
    );
    expect(
      inputToOutput(
        'this is an example sentence',
        textToMorseObj,
        'textToMorse'
      )
    ).toBe(
      `- .... .. ... | .. ... | .- -. | . -..- .- -- .--. .-.. . | ... . -. - . -. -.-. .`
    );
  });
  test('textToMorse function should handle empty spaces', () => {
    expect(inputToOutput('', textToMorseObj, 'textToMorse')).toBe('');
    expect(inputToOutput(' ', textToMorseObj, 'textToMorse')).toBe('');
  });
  test('textToMorse function should be able to handle excess whitespace', () => {
    expect(inputToOutput('  ', textToMorseObj, 'textToMorse')).toBe('');
    expect(inputToOutput('MEOW', textToMorseObj, 'textToMorse')).toBe(
      inputToOutput('     MEOW    ', textToMorseObj, 'textToMorse')
    );
  });
  test('textToMorse function should be able to translate numbers', () => {
    expect(inputToOutput('12345', textToMorseObj, 'textToMorse')).toBe(
      '.---- ..--- ...-- ....- .....'
    );
    expect(inputToOutput('67890', textToMorseObj, 'textToMorse')).toBe(
      '-.... --... ---.. ----. -----'
    );
  });
  test('textToMorse function should be case insensitive', () => {
    expect(inputToOutput('MEOW', textToMorseObj, 'textToMorse')).toBe(
      inputToOutput('meow', textToMorseObj, 'textToMorse')
    );
    expect(inputToOutput('ExAmPlE', textToMorseObj, 'textToMorse')).toBe(
      inputToOutput('eXaMpLe', textToMorseObj, 'textToMorse')
    );
  });
  test('textToMorse function should be able to handle certain special characters', () => {
    expect(inputToOutput('!@&()', textToMorseObj, 'textToMorse')).toBe(
      '-.-.-- .--.-. .-... -.--. -.--.-'
    );
    expect(inputToOutput('-+=\'"', textToMorseObj, 'textToMorse')).toBe(
      '-....- .-.-. -...- .----. .-..-.'
    );
    expect(inputToOutput(',.?/:', textToMorseObj, 'textToMorse')).toBe(
      '--..-- .-.-.- ..--.. -..-. ---...'
    );
  });
  test('textToMorse function should translate unrecognised characters as \u{FFFD}', () => {
    expect(inputToOutput('#', textToMorseObj, 'textToMorse')).toBe('\u{FFFD}');
    expect(inputToOutput('|', textToMorseObj, 'textToMorse')).toBe('\u{FFFD}');
    expect(inputToOutput('\u{FFFD}', textToMorseObj, 'textToMorse')).toBe(
      '\u{FFFD}'
    );
  });
});

describe('Morse Code to English', () => {
  test('morseToText function should be able to translate letters from A-Z', () => {
    expect(inputToOutput('.', morseToTextObj, 'morseToText')).toBe('E');
    expect(inputToOutput('-- . --- .--', morseToTextObj, 'morseToText')).toBe(
      'MEOW'
    );
    expect(
      inputToOutput('.- -... -.-. -.. . ..-.', morseToTextObj, 'morseToText')
    ).toBe('ABCDEF');
    expect(
      inputToOutput('--. .... .. .--- -.-', morseToTextObj, 'morseToText')
    ).toBe('GHIJK');
    expect(
      inputToOutput('.-.. -- -. --- .--.', morseToTextObj, 'morseToText')
    ).toBe('LMNOP');
    expect(
      inputToOutput('--.- .-. ... - ..-', morseToTextObj, 'morseToText')
    ).toBe('QRSTU');
    expect(
      inputToOutput('...- .-- -..- -.-- --..', morseToTextObj, 'morseToText')
    ).toBe('VWXYZ');
  });
  test('morseToText function should not modify original string', () => {
    let str = '- . ... -';
    const strToEng = inputToOutput(str, morseToTextObj, 'morseToText');
    expect(inputToOutput(str, morseToTextObj, 'morseToText')).toBe('TEST');
    expect(str).not.toBe(strToEng);
  });
  test('morseToText function should be able to translate a string of words', () => {
    expect(
      inputToOutput(
        `-- . --- .-- | -- . --- .--`,
        morseToTextObj,
        'morseToText'
      )
    ).toBe(`MEOW MEOW`);
    expect(
      inputToOutput(
        `.. | .-.. --- ...- . | -.-- --- ..-`,
        morseToTextObj,
        'morseToText'
      )
    ).toBe('I LOVE YOU');
    expect(
      inputToOutput(
        `- .... .. ... | .. ... | .- -. | . -..- .- -- .--. .-.. . | ... . -. - . -. -.-. .`,
        morseToTextObj,
        'morseToText'
      )
    ).toBe('THIS IS AN EXAMPLE SENTENCE');
  });
  test('morseToText function should translate into uppercase letters', () => {
    const lowercaseStr = 'meow';
    const lowercaseToMorse = inputToOutput(
      lowercaseStr,
      morseToTextObj,
      'morseToText'
    );
    expect(
      inputToOutput(lowercaseToMorse, morseToTextObj, 'morseToText')
    ).not.toBe(lowercaseStr);
  });
  test('morseToText function should handle empty values', () => {
    expect(inputToOutput('', morseToTextObj, 'morseToText')).toBe('');
    expect(inputToOutput(' ', morseToTextObj, 'morseToText')).toBe('');
  });
  test('morseToText function should be able to handle excess whitespace', () => {
    expect(inputToOutput(`. | `, morseToTextObj, 'morseToText')).toBe('E');
    expect(inputToOutput('  ', morseToTextObj, 'morseToText')).toBe('');
    expect(inputToOutput('-- . --- .--', morseToTextObj, 'morseToText')).toBe(
      inputToOutput(
        '     --    .    ---    .--    ',
        morseToTextObj,
        'morseToText'
      )
    );
    expect(
      inputToOutput(
        ` |  |  |  - . ... -  |  |  | `,
        morseToTextObj,
        'morseToText'
      )
    ).toBe('TEST');
    expect(inputToOutput(` |   |   | `, morseToTextObj, 'morseToText')).toBe(
      ''
    );
    expect(
      inputToOutput(
        `.. |    |    | .-.. --- ...- . |   |    |    | -.-- --- ..-`,
        morseToTextObj,
        'morseToText'
      )
    ).toBe('I LOVE YOU');
  });
  test('morseToText function should be able to translate numbers', () => {
    expect(
      inputToOutput(
        '.---- ..--- ...-- ....- .....',
        morseToTextObj,
        'morseToText'
      )
    ).toBe('12345');
    expect(
      inputToOutput(
        '-.... --... ---.. ----. -----',
        morseToTextObj,
        'morseToText'
      )
    ).toBe('67890');
  });
  test('morseToText function should be able to handle certain special characters', () => {
    expect(
      inputToOutput(
        '-.-.-- .--.-. .-... -.--. -.--.-',
        morseToTextObj,
        'morseToText'
      )
    ).toBe('!@&()');
    expect(
      inputToOutput(
        '-....- .-.-. -...- .----. .-..-.',
        morseToTextObj,
        'morseToText'
      )
    ).toBe('-+=\'"');
    expect(
      inputToOutput(
        '--..-- .-.-.- ..--.. -..-. ---...',
        morseToTextObj,
        'morseToText'
      )
    ).toBe(',.?/:');
  });
  test('morseToText function should translate unrecognised characters as \u{FFFD}', () => {
    expect(inputToOutput('#', morseToTextObj, 'morseToText')).toBe('\u{FFFD}');
    expect(inputToOutput('\u{FFFD}', morseToTextObj, 'morseToText')).toBe(
      '\u{FFFD}'
    );
  });
});
