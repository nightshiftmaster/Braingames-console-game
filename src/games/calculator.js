import runGame from '../index.js';

import generateNumber from '../number-generator';

const gameAlert = ('What is the result of the expression?');

const createOperator = () => {
  const action = ['+', '*', '-'];
  const result = action[generateNumber(0, action.length - 1)];
  return result;
};

const calculateResult = (operator, number1, number2) => {
  let result;
  switch (operator) {
    case ('+'):
      result = number1 + number2;
      break;
    case ('*'):
      result = number1 * number2;
      break;
    case ('-'):
      result = number1 - number2;
      break;
    default:
      break;
  }
  return result;
};

const generateData = () => {
  const operator = createOperator();
  const number1 = generateNumber();
  const number2 = generateNumber();
  const makeQuestion = `${number1} ${operator} ${number2}`;
  const answer = calculateResult(operator, number1, number2).toString();
  return [makeQuestion, answer];
};
export default () => runGame(gameAlert, generateData);
