export const elementTextArr = [];
class TextElement {
  constructor(value, heading, description) {
    this.value = value;
    this.heading = heading;
    this.description = description;
  }
}

const textEl = new TextElement(
  'text',
  'Text',
  'Type in this box to have the translation appear in the other text box.'
);
const morseEl = new TextElement(
  'morse',
  'Morse Code',
  "Type in morse code to have the translation appear in the other text box. Put a space between 'characters' and put a ' | ' inbetween words."
);
const binaryEl = new TextElement(
  'binary',
  'Binary',
  "Type in binary to have the translation appear in the other text box. Put a space between 'characters and put a ' 00100000 ' inbetween words."
);

elementTextArr.push(textEl);
elementTextArr.push(morseEl);
elementTextArr.push(binaryEl);
