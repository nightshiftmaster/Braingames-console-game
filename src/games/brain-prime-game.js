import game from '../index.js';

import generateNumber from '../number-generator';

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
const showNumber = () => {
  const number = generateNumber().toString();
  const answer = (isPrime(number) ? 'yes' : 'no');
  rightAnswer.pop();
  rightAnswer.push(answer);
  return number;
};

const showAnswer = () => `${rightAnswer}`;

const runPrimeGame = () => game(gameAlert, showNumber, showAnswer);
export default runPrimeGame;
