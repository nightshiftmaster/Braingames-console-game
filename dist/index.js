"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const printWords = () => {
  const userName = _readlineSync.default.question('May I have your name?');

  console.log('hello, ' + userName + '!');
};

var _default = printWords;
exports.default = _default;