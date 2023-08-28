const {replace} = '';

// escape
const ca = /[<>&\xA0]/g;

const esca = {
  '\xA0': '&#160;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

const pe = m => esca[m];

/**
 * Safely escape HTML entities such as `&`, `<`, `>` only.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
export const escape = es => replace.call(es, ca, pe);
