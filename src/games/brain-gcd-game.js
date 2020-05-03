import game from '../index.js';

import numberGenerator from '../number-generator';

const gameAlert = ('Find the greatest common divisor of given numbers.');

const numb1 = [];
const numb2 = [];

const generateNumbers = () => {
  const number1 = (numberGenerator());
  const number2 = (numberGenerator());
  numb1.pop();
  numb2.pop();
  numb1.push(number1);
  numb2.push(number2);
  const numbers = (`${number1} ${number2}`);
  return numbers;
};

const showGreatestDivisor = (num1, num2) => {
  let divisor = 0;
  for (let i = 0; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = (Math.max(i)).toString();
    }
  }
  return divisor;
};
const checkGreatestDivisor = () => showGreatestDivisor(numb1, numb2);

const greatestDivisorGame = () => game(gameAlert, generateNumbers, checkGreatestDivisor);

export default greatestDivisorGame;
