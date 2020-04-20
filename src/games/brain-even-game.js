import game from '../index.js';

import numberGenerator from './number-generator.js';

const ifEven = (numb) => (numb % 2 === 0 ? 'yes' : 'no');

const gameAlert = ('Answer "yes" if the number is even, otherwise answer "no".');

let result = 0;
const question = () => {
  const number = (numberGenerator());
  result = number.toString();
  return result;
};

const rightAnswer = () => ifEven(result);

const brainEvengame = () => game(gameAlert, question, rightAnswer);


export default brainEvengame;
