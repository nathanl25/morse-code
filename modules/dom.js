import { elementTextArr } from '../assets/element-text.js';

export const disableOptions = (selector, nodeList) => {
  nodeList.forEach((e) => {
    if (e.value === selector.target.value) {
      e.disabled = true;
    } else {
      e.disabled = false;
    }
  });
};

export const updateTextElements = (position, selector) => {
  const heading = document.getElementById(position + 'Heading');
  const description = document.getElementById(position + 'Description');
  elementTextArr.forEach((element) => {
    if (element.value === selector) {
      heading.textContent = element.heading;
      description.textContent = element.description;
    }
  });
};

// topOptions.forEach((el) => {
//     if (el.value === event.target.value) {
//       el.disabled = true;
//     } else {
//       el.disabled = false;
//     }
//   });
