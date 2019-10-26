
/** Object of prebuild methods */
const prebuiltMethods = {
  'anotas': {
    method: function(...rest) {
      console.log(rest);
    }
  }
}



const Tokens = {
    '+':  'PLUS',
    '-':  'MINUS',
    '*':  'MULTIPLY',
    '.':  'PERIOD',
    '\\': 'BACKSLASH',
    ':':  'COLON',
    '%':  'PERCENT',
    '|':  'PIPE',
    '!':  'EXCLAMATION',
    '?':  'QUESTION',
    '#':  'POUND',
    '&':  'AMPERSAND',
    ';':  'SEMI',
    ',':  'COMMA',
    '(':  'L_PAREN',
    ')':  'R_PAREN',
    '<':  'L_ANG',
    '>':  'R_ANG',
    '{':  'L_BRACE',
    '}':  'R_BRACE',
    '[':  'L_BRACKET',
    ']':  'R_BRACKET',
    '=':  'EQUALS',
    'mudable': 'DECL'
}

module.exports = { prebuiltMethods, Tokens }

