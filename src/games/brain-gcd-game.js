import game from '../index.js';

import numberGenerator from '../number-generator';

const gameAlert = ('Find the greatest common divisor of given numbers.');

let number1 = 0;
let number2 = 0;

const numbers = () => {
  number1 = (numberGenerator());
  number2 = (numberGenerator());
  const question = (`${number1} ${number2}`);
  return question;
};

const maxDivisor = (num1, num2) => {
  let devisor = 0;
  for (let i = 0; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      devisor = (Math.max(i)).toString();
    }
  }
  return devisor;
};
const checkMaxDevisor = () => maxDivisor(number1, number2);

const maxDivisorGame = () => game(gameAlert, numbers, checkMaxDevisor);

export default maxDivisorGame;
