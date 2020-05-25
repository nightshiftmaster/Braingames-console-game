import game from '../index.js';

import generateNumber from '../number-generator';

const isEven = (numb) => (numb % 2 === 0);

const gameAlert = ('Answer "yes" if the number is even, otherwise answer "no".');


const generateData = () => {
  const number = (generateNumber());
  const answer = (isEven(number) ? 'yes' : 'no');
  return [number, answer];
};


const runEvenGame = () => game(gameAlert, generateData);


export default runEvenGame;
