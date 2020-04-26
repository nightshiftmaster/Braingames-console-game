import game from '../index.js';

import numberGenerator from '../number-generator';

const gameAlert = ('What is the result of the expression?');

let result = 0;

const brainCalc = () => {
  const number1 = (numberGenerator());
  const number2 = (numberGenerator());
  const addition = (`${number1} + ${number2}`);
  const multiplication = (`${number1} * ${number2}`);
  const subtraction = (`${number1} - ${number2}`);
  const value = [];
  const action = [addition, multiplication, subtraction];
  const actionIndex = action.length;
  value.push(action[Math.floor(Math.random() * actionIndex)]);
  const question = value.toString();
  switch (question) {
    case (addition):
      result = (number1 + number2);
      break;
    case (multiplication):
      result = (number1 * number2);
      break;
    case (subtraction):
      result = (number1 - number2);
      break;
    default:
      break;
  }
  return (question);
};

const rightAnswer = () => result.toString();


const brainCalculatorgame = () => game(gameAlert, brainCalc, rightAnswer);

export default brainCalculatorgame;
