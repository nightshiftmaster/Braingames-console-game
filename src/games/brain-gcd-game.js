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
  const question = [generateNumber(), generateNumber()];
  const [number1, number2] = question;
  const answer = calculateGcd(number1, number2);
  return [`${number1} ${number2}`, answer];
};

export default () => runGame(gameAlert, generateData);
