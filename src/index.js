
import readlineSync from 'readline-sync';

import {
  brainCalc, rightAnswer, ifEven, ifEvengame, numb, numbers, maxDivisor,
} from './game.js';

const evenQuestion = ('Answer "yes" if the number is even, otherwise answer "no".');

const calcQuestion = ('What is the result of the expression?');

const maxDivisuestion = ('Find the greatest common divisor of given numbers.');


let name = '';


export const printWords = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  name = userName;
};
export const game = () => {
  console.log(`${maxDivisuestion}`);
  for (let i = 0; i < 3; i += 1) {
    numbers();
    const answer = readlineSync.question('Your answer: ');
    if (answer === maxDivisor()) {
      console.log('Correct!');
    } else {
      if (answer !== maxDivisor()) {
        return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${maxDivisor()}". Let's try again,${name}`);
      } if (answer === 'yes') {
        return console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${name}`);
      }
    }
  }
  return console.log('Congratulations, vlad!');
};
