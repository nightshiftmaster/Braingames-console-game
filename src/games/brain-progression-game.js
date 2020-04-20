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
  hiddenNumberIndex = (Math.floor(Math.random() * 10) + 1);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');
  return question;
};

const hiddeNumber = (progres) => {
  let result = 0;
  for (let n = 0; n < 10; n += 1) {
    result = (progres[0] + step * hiddenNumberIndex);
  }
  return result.toString();
};

const showNumber = () => hiddeNumber(progression);
const progressionGame = () => game(gameAlert, generateProgression, showNumber);
export default progressionGame;
