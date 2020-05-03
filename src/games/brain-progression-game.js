import game from '../index.js';

import numberGenerator from '../number-generator';

const gameAlert = ('What number is missing in the progression?');

const space = [];
const progression = [];
const missingNumber = [];
const generateProgression = () => {
  const start = numberGenerator();
  const numbers = [];
  const span = 4;
  const numberOfSteps = 10;
  const step = numberGenerator(1, span);
  space.pop();
  space.push(step);
  const border = start + (step * numberOfSteps);
  for (let i = start; i < border; i += step) {
    numbers.push(i);
  }
  progression.pop();
  progression.push(numbers);
  const progrLength = numbers.length - 1;
  const hiddenNumberIndex = numberGenerator(1, progrLength);
  missingNumber.pop();
  missingNumber.push(hiddenNumberIndex);
  numbers[hiddenNumberIndex] = '..';
  const progressionToString = numbers.join(' ');
  return progressionToString;
};

const showHiddenNumber = (progress) => {
  let number = 0;
  const firstSymbl = 0;
  const lastSymbl = progress.length;
  for (let n = firstSymbl; n < lastSymbl; n += 1) {
    number = (progress[0] + space * missingNumber);
  }
  return number.toString();
};

const showNumber = () => showHiddenNumber(progression.flat());
const progressionGame = () => game(gameAlert, generateProgression, showNumber);
export default progressionGame;
