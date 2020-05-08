import game from '../index.js';

import generateNumber from '../number-generator';

const gameAlert = ('Find the greatest common divisor of given numbers.');

const gcd = [];
const showNumbers = () => {
  let divisor = 0;
  const number1 = (generateNumber());
  const number2 = (generateNumber());
  const numbers = (`${number1} ${number2}`);
  for (let i = 0; i <= number1; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      divisor = (Math.max(i));
    }
  }
  gcd.pop();
  gcd.push(divisor);
  return numbers;
};

const showGrandDivisor = () => `${gcd}`;

const runGcdGame = () => game(gameAlert, showNumbers, showGrandDivisor);

export default runGcdGame;
