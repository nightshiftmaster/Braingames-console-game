import game from '../index.js';

const gameAlert = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const ifPrime = (num) => {
  let result = '';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  result = (num > 1) ? 'yes' : 'no';
  return result;
};

let num = 0;
const primeQuestion = () => {
  num = (Math.floor(Math.random() * 20) + 1);
  console.log('Question:', num.toString());
};
const checkNumber = () => ifPrime(num);
const brainPrimegame = () => game(gameAlert, primeQuestion, checkNumber);
export default brainPrimegame;
