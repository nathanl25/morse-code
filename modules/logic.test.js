import { engToMorse, morseToEng } from './logic.js';
const DELIM = ' | ';
const ERRCHAR = '\u{FFFD}';

describe('English to Morse Code', () => {
  const wrongArgError = new Error('Argument must be a string');
  test('Basic functionality', () => {
    expect(engToMorse('E')).toBe('.');
    expect(engToMorse('MEOW')).toBe('-- . --- .--');
    expect(engToMorse('ABCDEF')).toBe('.- -... -.-. -.. . ..-.');
    expect(engToMorse('GHIJK')).toBe('--. .... .. .--- -.-');
    expect(engToMorse('LMNOP')).toBe('.-.. -- -. --- .--.');
    expect(engToMorse('QRSTU')).toBe('--.- .-. ... - ..-');
    expect(engToMorse('VWXYZ')).toBe('...- .-- -..- -.-- --..');
  });
  test('Parameter Must be a string', () => {
    expect(() => {
      engToMorse(0);
    }).toThrow(wrongArgError);
    expect(() => {
      engToMorse(true);
    }).toThrow(wrongArgError);
    expect(() => {
      engToMorse(undefined);
    }).toThrow(wrongArgError);
    expect(() => {
      engToMorse(null);
    }).toThrow(wrongArgError);
    expect(() => {
      engToMorse({});
    }).toThrow(wrongArgError);
    expect(() => {
      engToMorse(['a']);
    }).toThrow(wrongArgError);
  });
  test('Original string should not be modified', () => {
    let str = 'test';
    const strToMorse = engToMorse(str);
    expect(engToMorse(str)).toBe('- . ... -');
    expect(str).not.toBe(strToMorse);
  });
  test('String of Words', () => {
    expect(engToMorse('MEOW MEOW')).toBe(`-- . --- .--${DELIM}-- . --- .--`);
    expect(engToMorse('I love you')).toBe(
      `..${DELIM}.-.. --- ...- .${DELIM}-.-- --- ..-`
    );
    expect(engToMorse('this is an example sentence')).toBe(
      `- .... .. ...${DELIM}.. ...${DELIM}.- -.${DELIM}. -..- .- -- .--. .-.. .${DELIM}... . -. - . -. -.-. .`
    );
  });
  test('Empty Values', () => {
    expect(engToMorse('')).toBe('');
    expect(engToMorse('  ')).toBe('');
  });
  test('Excess Whitespace Removal', () => {
    expect(engToMorse(' ')).toBe('');
    expect(engToMorse('MEOW')).toBe(engToMorse('     MEOW    '));
  });
  test('Numbers', () => {
    expect(engToMorse('12345')).toBe('.---- ..--- ...-- ....- .....');
    expect(engToMorse('67890')).toBe('-.... --... ---.. ----. -----');
  });
  test('Case insensitivity', () => {
    expect(engToMorse('MEOW')).toBe(engToMorse('meow'));
    expect(engToMorse('ExAmPlE')).toBe(engToMorse('eXaMpLe'));
  });
  test('Special Characters', () => {
    expect(engToMorse('!@&()')).toBe('-.-.-- .--.-. .-... -.--. -.--.-');
    expect(engToMorse('-+=\'"')).toBe('-....- .-.-. -...- .----. .-..-.');
    expect(engToMorse(',.?/:')).toBe('--..-- .-.-.- ..--.. -..-. ---...');
  });
  test("Characters that can't be converted", () => {
    expect(engToMorse('#')).toBe(ERRCHAR);
    expect(engToMorse('|')).toBe(ERRCHAR);
    expect(engToMorse('\n')).toBe(ERRCHAR);
    expect(engToMorse('\u{FFFD}')).toBe(ERRCHAR);
  });
});

describe('Morse Code to English', () => {
  const wrongArgError = new Error('Argument must be a string');
  test('Parameter Must be a string', () => {
    expect(() => {
      morseToEng(0);
    }).toThrow(wrongArgError);
    expect(() => {
      morseToEng(true);
    }).toThrow(wrongArgError);
    expect(() => {
      morseToEng(undefined);
    }).toThrow(wrongArgError);
    expect(() => {
      morseToEng(null);
    }).toThrow(wrongArgError);
    expect(() => {
      morseToEng({});
    }).toThrow(wrongArgError);
    expect(() => {
      morseToEng(['a']);
    }).toThrow(wrongArgError);
  });
  test('Basic functionality', () => {
    expect(morseToEng('.')).toBe('E');
    expect(morseToEng('-- . --- .--')).toBe('MEOW');
    expect(morseToEng('.- -... -.-. -.. . ..-.')).toBe('ABCDEF');
    expect(morseToEng('--. .... .. .--- -.-')).toBe('GHIJK');
    expect(morseToEng('.-.. -- -. --- .--.')).toBe('LMNOP');
    expect(morseToEng('--.- .-. ... - ..-')).toBe('QRSTU');
    expect(morseToEng('...- .-- -..- -.-- --..')).toBe('VWXYZ');
  });
  test('Original string should not be modified', () => {
    let str = '- . ... -';
    const strToEng = morseToEng(str);
    expect(morseToEng(str)).toBe('TEST');
    expect(str).not.toBe(strToEng);
  });
  test('String of Words', () => {
    expect(morseToEng(`-- . --- .--${DELIM}-- . --- .--`)).toBe(`MEOW MEOW`);
    expect(morseToEng(`..${DELIM}.-.. --- ...- .${DELIM}-.-- --- ..-`)).toBe(
      'I LOVE YOU'
    );
    expect(
      morseToEng(
        `- .... .. ...${DELIM}.. ...${DELIM}.- -.${DELIM}. -..- .- -- .--. .-.. .${DELIM}... . -. - . -. -.-. .`
      )
    ).toBe('THIS IS AN EXAMPLE SENTENCE');
  });
  test('String should be in uppercase', () => {
    const lowercaseStr = 'meow';
    const lowercaseToMorse = engToMorse(lowercaseStr);
    expect(morseToEng(lowercaseToMorse)).not.toBe(lowercaseStr);
  });
  test('Empty Values', () => {
    expect(morseToEng('')).toBe('');
    expect(morseToEng('  ')).toBe('');
  });
  test('Excess Whitespace Removal', () => {
    expect(morseToEng(`.${DELIM}`)).toBe('E');
    expect(morseToEng(' ')).toBe('');
    expect(morseToEng('-- . --- .--')).toBe(
      morseToEng('     -- . --- .--    ')
    );
    expect(
      morseToEng(`${DELIM}${DELIM}${DELIM} - . ... - ${DELIM}${DELIM}${DELIM}`)
    ).toBe('TEST');
    expect(morseToEng(`${DELIM} ${DELIM} ${DELIM}`)).toBe('');
    expect(
      morseToEng(
        `..${DELIM}  ${DELIM}  ${DELIM}.-.. --- ...- .${DELIM} ${DELIM}  ${DELIM}  ${DELIM}-.-- --- ..-`
      )
    ).toBe('I LOVE YOU');
  });
  test('Numbers', () => {
    expect(morseToEng('.---- ..--- ...-- ....- .....')).toBe('12345');
    expect(morseToEng('-.... --... ---.. ----. -----')).toBe('67890');
  });
  test('Special Characters', () => {
    expect(morseToEng('-.-.-- .--.-. .-... -.--. -.--.-')).toBe('!@&()');
    expect(morseToEng('-....- .-.-. -...- .----. .-..-.')).toBe('-+=\'"');
    expect(morseToEng('--..-- .-.-.- ..--.. -..-. ---...')).toBe(',.?/:');
  });
  test("Characters that can't be converted", () => {
    expect(morseToEng('#')).toBe(ERRCHAR);
    expect(morseToEng('\n')).toBe(ERRCHAR);
    expect(morseToEng('\u{FFFD}')).toBe(ERRCHAR);
  });
});
