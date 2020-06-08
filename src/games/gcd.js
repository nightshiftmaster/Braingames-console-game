import runGame from '../index.js';

import generateNumber from '../number-generator';

const gameAlert = ('Find the greatest common divisor of given numbers.');

const calculateGcd = (num1, num2) => {
  let divisor = 0;
  for (let i = 0; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = (Math.max(i)).toString();
    }
  }
  return divisor;
};

const generateData = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const question = `${number1} ${number2}`;
  const answer = calculateGcd(number1, number2);
  return [question, answer];
};

export default () => runGame(gameAlert, generateData);
