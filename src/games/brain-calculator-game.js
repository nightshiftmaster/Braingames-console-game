import game from '../index.js';

const gameAlert = ('What is the result of the expression?');

let result = 0;

const brainCalc = () => {
  const number1 = (Math.floor(Math.random() * 11));
  const number2 = (Math.floor(Math.random() * 11));
  const addition = (`${number1} + ${number2}`);
  const multiplication = (`${number1} * ${number2}`);
  const subtraction = (`${number1} - ${number2}`);
  const value = [];
  const action = [addition, multiplication, subtraction];
  value.push(action[Math.floor(Math.random() * 3)]);
  const question = value.toString();
  if (question.includes('+')) {
    result = (number1 + number2);
  } else if (question.includes('-')) {
    result = (number1 - number2);
  } else if (question.includes('*')) {
    result = (number1 * number2);
  }
  console.log('Question:', question);
};

const rightAnswer = () => result.toString();


const brainCalculatorgame = () => game(gameAlert, brainCalc, rightAnswer);

export default brainCalculatorgame;
