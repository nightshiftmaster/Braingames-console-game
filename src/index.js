
import readlineSync from 'readline-sync';

let name = '';
export const printWords = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  name = userName;
};

const ifEven = (numb) => (numb % 2 === 0 ? 'yes' : 'no');

export const game = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const number = (Math.floor(Math.random() * 11));
    console.log(number);

    const answer = readlineSync.question('');
    if (answer === ifEven(number)) {
      console.log('Correct!');
    } else {
      if (answer === 'no') {
        return console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again,${name}`);
      } if (answer === 'yes') {
        return console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again,${name}`);
      }
      return console.log(`wrong answer,let's try again, ${name}`);
    }
  }
  return console.log('Congratulations, vlad!');
};
