import game from '../index.js';

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
  const number = generateNumber().toString();
  const answer = (isPrime(number) ? 'yes' : 'no');
  return [number, answer];
};

const runPrimeGame = () => game(gameAlert, generateData);
export default runPrimeGame;
