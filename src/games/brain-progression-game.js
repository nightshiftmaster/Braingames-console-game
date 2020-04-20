import game from '../index.js';

import numberGenerator from './number-generator.js';

const gameAlert = ('What number is missing in the progression?');

let numberOfprogress = 0;
let arr2 = [];

const progression = () => {
  let string = '';
  let string2 = '';
  let arr = [];
  const num = (numberGenerator());
  const step = (Math.floor(Math.random() * 4) + 1);
  const border = num + (step * 10);
  for (let i = num; i < border; i += step) {
    string += (`${i} `);
    arr = string.split(' ');
    numberOfprogress = (Math.floor(Math.random() * 10));
    arr2 = arr[numberOfprogress];
    arr[numberOfprogress] = '..';
    string2 = arr.join(' ');
  }
  return string2;
};
const rightNumber = () => arr2;

const progressionGame = () => game(gameAlert, progression, rightNumber);
export default progressionGame;
