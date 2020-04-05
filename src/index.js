
import readlineSync from 'readline-sync';

import {
  brainCalc, rightAnswer, ifEven, ifEvengame, numb,
} from './game.js';

const evenQuestion = ('Answer "yes" if the number is even, otherwise answer "no".');

const calcQuestion = ('What is the result of the expression?');


let name = '';


export const printWords = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  name = userName;
};
export const game = () => {
  console.log(`${calcQuestion}`);
  for (let i = 0; i < 3; i += 1) {
    brainCalc();
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer()) {
      console.log('Correct!');
    } else {
      if (answer !== rightAnswer()) {
        return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer()}". Let's try again,${name}`);
      } if (answer === 'yes') {
        return console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again,${name}`);
      }
    }
  }
  return console.log('Congratulations, vlad!');
};
