

// import { variables } from './custom';
let { prebuiltMethods, Tokens } =  require('./pre-built');
let { variables } =  require('./custom');

const fs = require('fs');
const path = require('path');

/** Simple lexer for interpreting code */
const lex = str => {
  return str.split(/\s+/).filter((t) => t.length > 0)
  .map((t, i, arr) => {
    if (!isNaN(t)) return { type: 'NUMBER', value: +t }
    else {
      let prevToken = arr[i - 1];
      let type = Tokens[t] || 'WORD';
      if (prevToken && Tokens[prevToken] === 'DECL') type = 'VAR';
      return { type: type, value: t }
    }
  })
  // str.replace( /\n/g, " " ).split(' ').map(s => s.trim()).filter(s => s.length);
}

let run = () => {
  fs.readFile(__dirname + '/test.espanol', 'utf8', (err, data) => {
    if (err) throw err;
    iterateFile(lex(data));
  })
}

let iterateFile = (tokens) => {

  // console.log(tokens);

  tokens.forEach(t => console.log(t));

  tokens.reduce(([groups, joinNext, { prevType, prevToken }], {type, value}, ind) => {

    if (type === 'DECL') {

    }

    prevToken = { type, value };
    return [groups, joinNext, { prevType: type, prevValue: value }];

  }, [[], false, {}])

  // let test = tokens.reduce(([pieces, joinNext, { action, data }], piece, ind) => {

    
  //   if (newVar) {
  //     variables[piece];
  //   }
    
  //   let functionMatch = piece.match(/\(([^()]*)\)/);
  //   if (functionMatch) {
  //     let functionName = piece.substring(0, piece.indexOf('('));
  //     prebuiltMethods[functionName].method(functionMatch[1]);
  //   }
  //   if (joinNext) {
  //     pieces[ind - 1] = [pieces[ind - 1], piece].join(' ');
  //     return [pieces, 'joinNext'];
  //   } else {
  //     joinNext = ([`'`, `"`, "`"].includes(piece.charAt(0)));
  //     pieces.push(piece);
  //     return [pieces, joinNext, newVar]
  //   }
  //   newVar = piece === 'mudable';
  // }, [[], false, { action: null, data: null }])

  // console.log(test);
}

let isNewVar = (indicator) => indicator === 'mudable'

let findTokenType = (token) => {
  let tokenType;
  if (token === 'mudable') return 'VARIABLE';
  if (token.match(/\(([^()]*)\)/)) {
    let functionName = piece.substring(0, piece.indexOf('('));
    prebuiltMethods[functionName].method(functionMatch[1]);
    return 'METHOD'
  }
  if (([`'`, `"`, "`"].includes(token.charAt(0)))) return 'STRING';

}

run()

// /** Actions Object */
// let actions = {
//   newVar: {
//     action: function(name) {
//       this.logicMethod(name);
//       return this.nextMethod(name);
//     },
//     logicMethod: function(name) {},
//     nextMethod: function(name) { return { action: 'varVal', data: name } }
//   },
//   varVal: {
//     action: function(name) {
//       this.logicMethod(name);
//       return this.nextMethod(name);
//     },
//     logicMethod: function(varRef, val) { variables[varRef] = val },
//     nextMethod: function(varRef, val) { return { action: 'defaultAction', data: null } },
//   },
//   joinNext: {
//     action: function(name) {
//       this.logicMethod(name);
//       return this.nextMethod(name);
//     },
//     logicMethod: function(varRef, val) { pieces[ind - 1] = [pieces[ind - 1], piece].join(' '); },
//     nextMethod: function(varRef, val) { return { action: 'defaultAction', data: null } },
//   },

//   defaultAction: {
//     action: function(name) {
//       this.logicMethod(name);
//       return this.nextMethod(name);
//     },
//     logicMethod: function() {},
//     nextMethod: function() { return { action: 'defaultAction', data: null } },
//   },

//   defaultMethod: function() {}
// };


// defaultMethod: () => ({ action: null, data: null })



// class Action {
//   constructor([[logicMethod, logicParams], [nextMethod, nextParams]]) {
//     this.logicMethod = logicMethod || null;
//     this.nextMethod = nextMethod || Action.defaultMethod();
//     this.logicParams = logicParams || null;
//     this.nextParams = nextParams || null;
//   }

//   action() {
//     console.log([this.logicMethod, this.logicParams], [this.nextMethod, this.nextParams])
//     this.logicMethod(this.logicParams);
//     return this.nextMethod(this.nextParams);
//   }

//   static default() { return { action: null, data: null } }

// }






