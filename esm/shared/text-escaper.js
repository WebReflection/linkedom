const {replace} = '';

const htmlAttributeValueCharacters = /["&<>\xA0]/g;
const xmlAttributeValueCharacters = /[\t\n\r"&<>]/g;

const htmlTextContentCharacters = /[&<>\xA0]/g;
const xmlTextContentCharacters = /[&<>]/g;

const characterEntities = {
  '\t': '&#x9;',
  '\n': '&#xA;',
  '\r': '&#xD;',
  '"': '&quot;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '\xA0': '&nbsp;'
};

const replaceCharacterByEntity = character => characterEntities[character];

/**
 * Safely escape HTML entities such as `"`, `&`, `<`, `>` and U+00A0 NO-BREAK SPACE only.
 * @param {string} value the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
export const escapeHtmlAttributeValue = value => replace.call(value, htmlAttributeValueCharacters, replaceCharacterByEntity);

/**
 * Safely escape XML entities such as `\t`, `\n`, `\r`, `"`, `&`, `<` and `>` only.
 * @param {string} value the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
export const escapeXmlAttributeValue = value => replace.call(value, xmlAttributeValueCharacters, replaceCharacterByEntity);

/**
 * Safely escape HTML entities such as `&`, `<`, `>` and U+00A0 NO-BREAK SPACE only.
 * @param {string} content the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
export const escapeHtmlTextContent = content => replace.call(content, htmlTextContentCharacters, replaceCharacterByEntity);

/**
 * Safely escape XML entities such as `&`, `<` and `>` only.
 * @param {string} content the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */
export const escapeXmlTextContent = content => replace.call(content, xmlTextContentCharacters, replaceCharacterByEntity);
