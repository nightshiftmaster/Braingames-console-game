import game from '../index.js';

import numberGenerator from './number-generator.js';

const gameAlert = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const ifPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

let numb = 0;
const number = () => {
  numb = numberGenerator().toString();
  return numb;
};

const checkNumber = () => {
  const result = (ifPrime(numb) ? 'yes' : 'no');
  return result;
};

const brainPrimegame = () => game(gameAlert, number, checkNumber);
export default brainPrimegame;
