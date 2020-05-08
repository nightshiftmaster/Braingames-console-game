import game from '../index.js';

import generateNumber from '../number-generator';

const isEven = (numb) => (numb % 2 === 0);

const gameAlert = ('Answer "yes" if the number is even, otherwise answer "no".');

const rightAnswer = [];
const showNumber = () => {
  const number = (generateNumber());
  const answer = (isEven(number) ? 'yes' : 'no');
  rightAnswer.pop();
  rightAnswer.push(answer);
  return number.toString();
};
const showAnswer = () => `${rightAnswer}`;

const runEvenGame = () => game(gameAlert, showNumber, showAnswer);


export default runEvenGame;
