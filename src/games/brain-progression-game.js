import game from '../index.js';

import generateNumber from '../number-generator';

const gameAlert = ('What number is missing in the progression?');

const createProgression = (start, span, length) => {
  const progression = [];
  const step = generateNumber(1, span);
  const border = start + (step * length);
  for (let i = start; i < border; i += step) {
    progression.push(i);
  }
  const progrLength = progression.length - 1;
  const hiddenNumberIndex = generateNumber(1, progrLength);
  progression[hiddenNumberIndex] = '..';
  return [progression, step, hiddenNumberIndex];
};

const showHiddenNumber = (progression, space, hiddenIndex) => {
  let number = 0;
  const firstSymbl = 0;
  const lastSymbl = progression.length;
  for (let n = firstSymbl; n < lastSymbl; n += 1) {
    number = (progression[0] + space * hiddenIndex);
  }
  return number;
};


const makeData = () => {
  const data = createProgression(generateNumber(1, 50), generateNumber(1, 5), 10);
  const progression = data[0];
  const space = data[1];
  const hiddenNumber = data[2];
  const number = showHiddenNumber(progression, space, hiddenNumber);
  const progressionToString = progression.join(' ');
  return [progressionToString, number];
};

const runProgressionGame = () => game(gameAlert, makeData);
export default runProgressionGame;
