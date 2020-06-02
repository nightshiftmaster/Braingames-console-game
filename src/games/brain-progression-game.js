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
  for (let n = 0; n < progression.length; n += 1) {
    let current = progression[n];
    let previus = progression[n - 1];
    if (progression[n] === '..') {
      hiddenIndex = n;
    }
    if (current === '..' || previus === '..') {
      current = progression[n + 1];
      previus = progression[[n - 1] + 1];
      if (current === progression[progression.length]) {
        current = progression[n - 2];
        previus = progression[[n - 1] - 2];
      }
    }
    const space = current - previus;
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
