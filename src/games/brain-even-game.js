import game from '../index.js';

import numberGenerator from '../number-generator';

const isEven = (numb) => (numb % 2 === 0);

const gameAlert = ('Answer "yes" if the number is even, otherwise answer "no".');

const rightAnswer = [];
const generateNumber = () => {
  const number = (numberGenerator());
  const answer = (isEven(number) ? 'yes' : 'no');
  rightAnswer.pop();
  rightAnswer.push(answer);
  return number.toString();
};
const showAnswer = () => rightAnswer.toString();

const brainEvenGame = () => game(gameAlert, generateNumber, showAnswer);


export default brainEvenGame;
