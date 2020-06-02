import runGame from '../index.js';

import generateNumber from '../number-generator';

const isEven = (numb) => (numb % 2 === 0);

const gameAlert = ('Answer "yes" if the number is even, otherwise answer "no".');

const generateData = () => {
  const question = generateNumber();
  const answer = (isEven(question) ? 'yes' : 'no');
  return [question.toString(), answer];
};

export default () => runGame(gameAlert, generateData);
