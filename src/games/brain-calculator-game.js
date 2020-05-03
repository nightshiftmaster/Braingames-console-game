import game from '../index.js';

import numberGenerator from '../number-generator';

const gameAlert = ('What is the result of the expression?');

const expression = [];
const generateExpression = () => {
  const number1 = numberGenerator();
  const number2 = numberGenerator();
  const addition = (`${number1} + ${number2}`);
  const multiplication = (`${number1} * ${number2}`);
  const subtraction = (`${number1} - ${number2}`);
  const action = [addition, multiplication, subtraction];
  const actionIndex = action.length;
  const value = [];
  value.push(action[numberGenerator(0, actionIndex)]);
  const generatedExpression = value.toString();
  expression.pop();
  expression.push(generatedExpression);
  return generatedExpression;
};

const calculateResult = () => {
  let arrayOfExpression = [];
  const stringOfExpression = expression.join('');
  arrayOfExpression = stringOfExpression.split(' ');
  let result = 0;
  if (arrayOfExpression.includes('+')) {
    result = Number(arrayOfExpression[0]) + Number(arrayOfExpression[2]);
  }
  if (arrayOfExpression.includes('*')) {
    result = Number(arrayOfExpression[0]) * Number(arrayOfExpression[2]);
  }
  if (arrayOfExpression.includes('-')) {
    result = Number(arrayOfExpression[0]) - Number(arrayOfExpression[2]);
  }
  return result.toString();
};

const brainCalculatorGame = () => game(gameAlert, generateExpression, calculateResult);

export default brainCalculatorGame;
