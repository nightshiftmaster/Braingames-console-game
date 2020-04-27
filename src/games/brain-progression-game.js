import game from '../index.js';

import numberGenerator from '../number-generator';

const gameAlert = ('What number is missing in the progression?');

let step = 0;
let progression = [];
let hiddenNumberIndex;
const generateProgression = () => {
  const start = (numberGenerator());
  progression = [];
  const span = 4;
  const numberOfSteps = 10;
  step = (Math.floor(Math.random() * span) + 1);
  const border = start + (step * numberOfSteps);
  for (let i = start; i < border; i += step) {
    progression.push(i);
  }
  const progrLength = progression.length - 1;
  hiddenNumberIndex = (Math.floor(Math.random() * progrLength) + 1);
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
