import runGame from '../index.js';

import generateNumber from '../number-generator';

const gameAlert = ('What number is missing in the progression?');

const makeQuestion = (start, diff, length) => {
  const progression = [];
  for (let i = start; i < length; i += diff) {
    progression.push(i);
  }
  return progression;
};

const makeData = () => {
  const start = generateNumber(1, 50);
  const diff = generateNumber(1, 4);
  const length = 10;
  const progressionLength = start + (diff * length);
  const data = makeQuestion(start, diff, progressionLength);
  const hiddenNumberIndex = generateNumber(0, data.length - 1);
  const answer = data[hiddenNumberIndex].toString();
  data[hiddenNumberIndex] = '..';
  const question = data.join(' ');
  return [question, answer];
};

export default () => runGame(gameAlert, makeData);
