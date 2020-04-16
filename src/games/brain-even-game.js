import game from '../index.js';

const ifEven = (numb) => (numb % 2 === 0 ? 'yes' : 'no');

const gameAlert = ('Answer "yes" if the number is even, otherwise answer "no".');

let result = 0;
const question = () => {
  const number = (Math.floor(Math.random() * 11));
  result = number.toString();
  console.log('Question:', result);
};

const rightAnswer = () => ifEven(result);

const brainEvengame = () => game(gameAlert, question, rightAnswer);


export default brainEvengame;
