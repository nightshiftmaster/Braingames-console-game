import game from '../index.js';

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
  const value = [];
  value.push(action[generateNumber(0, actionIndex)]);
  const generatedExpression = value.toString();
  return generatedExpression;
};

const calculateResult = (expression) => {
  let result = 0;
  const partOfExpression = expression.split(' ');
  switch (partOfExpression[1]) {
    case ('+'):
      result = Number(partOfExpression[0]) + Number(partOfExpression[2]);
      break;
    case ('*'):
      result = Number(partOfExpression[0]) * Number(partOfExpression[2]);
      break;
    case ('-'):
      result = Number(partOfExpression[0]) - Number(partOfExpression[2]);
      break;
    default:
      break;
  }
  return result;
};

const generateData = () => {
  const expression = createExpression();
  const result = calculateResult(expression);
  return [expression, result];
};

const runCalculatorGame = () => game(gameAlert, generateData);

export default runCalculatorGame;
