import runGame from '../index.js';

import generateNumber from '../number-generator';

const gameAlert = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const gameQuestion = generateNumber();
  const gameAnswer = (isPrime(gameQuestion) ? 'yes' : 'no');
  return [gameQuestion.toString(), gameAnswer];
};

export default () => runGame(gameAlert, generateQuestionAndAnswer);
