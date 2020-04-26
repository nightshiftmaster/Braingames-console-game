import game from '../index.js';

import numberGenerator from '../number-generator';

const ifEven = (numb) => (numb % 2 === 0);

const gameAlert = ('Answer "yes" if the number is even, otherwise answer "no".');

let rightAnswer;
const question = () => {
  const number = (numberGenerator());
  rightAnswer = (ifEven(number) ? 'yes' : 'no');
  return number.toString();
};
const answer = () => rightAnswer;

const brainEvengame = () => game(gameAlert, question, answer);


export default brainEvengame;
