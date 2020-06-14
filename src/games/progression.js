import runGame from '../index.js';

import generateNumber from '../number-generator';

const gameAlert = ('What number is missing in the progression?');

const makeQuestion = (firstNumber, diff, lastNumber) => {
  const progression = [];
  for (let i = firstNumber; i < lastNumber; i += diff) {
    progression.push(i);
  }
  return progression;
};

const makeData = () => {
  const firstNumber = generateNumber(1, 50);
  const diff = generateNumber(1, 4);
  const length = 10;
  const lastNumber = firstNumber + (diff * length);
  const data = makeQuestion(firstNumber, diff, lastNumber);
  const hiddenNumberIndex = generateNumber(0, length - 1);
  const answer = data[hiddenNumberIndex].toString();
  data[hiddenNumberIndex] = '..';
  const question = data.join(' ');
  return [question, answer];
};

export default () => runGame(gameAlert, makeData);
