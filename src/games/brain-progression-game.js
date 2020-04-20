import game from '../index.js';

import numberGenerator from './number-generator.js';

const gameAlert = ('What number is missing in the progression?');

let step = 0;
let progression = [];
let hiddenNumberIndex;
const generateProgression = () => {
  const start = (numberGenerator());
  progression = [];
  step = (Math.floor(Math.random() * 4) + 1);
  const border = start + (step * 10);
  for (let i = start; i < border; i += step) {
    progression.push(i);
  }
  hiddenNumberIndex = (Math.floor(Math.random() * 9) + 1);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');
  return question;
};

const number = (progres) => {
  let result = 0;
  const firstSymbl = 0;
  const lastSymbl = progres.length;
  for (let n = firstSymbl; n < lastSymbl; n += 1) {
    result = (progres[0] + step * hiddenNumberIndex);
  }
  return result.toString();
};

const showNumber = () => number(progression);
const progressionGame = () => game(gameAlert, generateProgression, showNumber);
export default progressionGame;
