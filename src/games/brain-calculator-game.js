import runGame from '../index.js';

import generateNumber from '../number-generator';

const gameAlert = ('What is the result of the expression?');

const createExpression = () => {
  const number1 = generateNumber();
  const number2 = generateNumber();
  const addition = (`${number1} + ${number2}`);
  const multiplication = (`${number1} * ${number2}`);
  const subtraction = (`${number1} - ${number2}`);
  const action = [addition, multiplication, subtraction];
  const actionIndex = action.length;
  let expression = '';
  expression += action[generateNumber(0, actionIndex)];
  const expressionToArr = expression.split(' ');
  return expressionToArr;
};

const calculateResult = (operator, number1, number2) => {
  let result = 0;
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
  const question = createExpression();
  const operator = question[1];
  const number1 = Number(question[0]);
  const number2 = Number(question[2]);
  const answer = calculateResult(operator, number1, number2);
  return [question.join(' '), answer.toString()];
};

export default () => runGame(gameAlert, generateData);
