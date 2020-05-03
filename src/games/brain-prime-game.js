import game from '../index.js';

import numberGenerator from '../number-generator';

const gameAlert = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  const prime = num > 1;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0 || !prime) {
      return false;
    }
  }
  return prime;
};


const rightAnswer = [];
const generateNumber = () => {
  const number = numberGenerator().toString();
  const answer = (isPrime(number) ? 'yes' : 'no');
  rightAnswer.pop();
  rightAnswer.push(answer);
  return number;
};

const showAnswer = () => rightAnswer.toString();

const brainPrimeGame = () => game(gameAlert, generateNumber, showAnswer);
export default brainPrimeGame;
