import game from '../src/index.js';

const gameAlert = ('What is the result of the expression?');

let result = 0;

const brainCalc = () => {
  const a = (Math.floor(Math.random() * 11));
  const b = (Math.floor(Math.random() * 11));
  const addition = (`${a} + ${b}`);
  const multiplication = (`${a} * ${b}`);
  const subtraction = (`${a} - ${b}`);
  const value = [];
  const action = [addition, multiplication, subtraction];
  value.push(action[Math.floor(Math.random() * 3)]);
  const question = value.toString();
  if (question.includes('+')) {
    result = (a + b);
  } else if (question.includes('-')) {
    result = (a - b);
  } else if (question.includes('*')) {
    result = (a * b);
  }
 console.log('Question:', question);
};

const rightAnswer = () => result.toString();


const brainCalculatorgame = () => game(gameAlert, brainCalc, rightAnswer);

export default brainCalculatorgame;
