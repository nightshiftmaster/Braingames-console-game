import game from '../index.js';

import generateNumber from '../number-generator';

const gameAlert = ('Find the greatest common divisor of given numbers.');

const calculateGcd = (num1, num2) => {
  let divisor = 0;
  for (let i = 0; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = (Math.max(i)).toString();
    }
  }
  return [[`${num1} ${num2}`], divisor];
};


const generateData = () => {
  const data = calculateGcd(generateNumber(), generateNumber());
  const numbers = data[0];
  const gcd = data[1];
  return [numbers, gcd];
};

const runGcdGame = () => game(gameAlert, generateData);

export default runGcdGame;
