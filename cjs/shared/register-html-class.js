'use strict';
const htmlClasses = new Map;
exports.htmlClasses = htmlClasses;

const registerHTMLClass = (names, Class) => {
  for (const name of [].concat(names)) {
    htmlClasses.set(name, Class);
    htmlClasses.set(name.toUpperCase(), Class);
  }
};
exports.registerHTMLClass = registerHTMLClass;
