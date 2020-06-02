import runGame from '../index.js';

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
  return progression;
};

const showAnswer = (progression) => {
  let number;
  let hiddenIndex;
  let space;
  for (let n = 0; n < progression.length; n += 1) {
    if (progression[n] === '..') {
      hiddenIndex = n;
    }
    space = progression[1] - progression[0];
    number = (progression[0] + space * hiddenIndex);
  }
  return number;
};

const makeData = () => {
  const data = createProgression(generateNumber(1, 50), generateNumber(1, 6), 10);
  const answer = showAnswer(data).toString();
  const question = data.join(' ');
  return [question, answer];
};

export default () => runGame(gameAlert, makeData);
