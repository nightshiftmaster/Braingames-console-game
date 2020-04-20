import game from '../index.js';

import numberGenerator from './number-generator.js';

const gameAlert = ('What number is missing in the progression?');

let numberOfprogress = 0;
let array2 = [];

const progression = () => {
  let string = '';
  let string2 = '';
  let array = [];
  const num = (numberGenerator());
  const step = (Math.floor(Math.random() * 4) + 1);
  const border = num + (step * 10);
  for (let i = num; i < border; i += step) {
    string += (`${i} `);
    array = string.split(' ');
    numberOfprogress = (Math.floor(Math.random() * 10));
    array2 = array[numberOfprogress];
    array[numberOfprogress] = '..';
    string2 = array.join(' ');
  }
  return string2;
};
const rightNumber = () => array2;

const progressionGame = () => game(gameAlert, progression, rightNumber);
export default progressionGame;
