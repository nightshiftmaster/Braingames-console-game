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

const generateData = () => {
  const question = generateNumber();
  let answer;
  if (isPrime(question)) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question.toString(), answer];
};

export default () => runGame(gameAlert, generateData);
