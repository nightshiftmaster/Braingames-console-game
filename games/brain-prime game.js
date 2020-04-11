import game from '../src/index.js';

const gameAlert = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const ifPrime = (num) => {
  let count = 0;
  let value;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      count += 1;
    }
    value = (count > 2 || count === 1) ? 'no' : 'yes';
  }
  return value;
};

let num = 0;
const primeQuestion = () => {
  num = (Math.floor(Math.random() * 20) + 1);
  console.log('Question:', num.toString());
};
const checkNumber = () => ifPrime(num);
const brainPrimegame = () => game(gameAlert, primeQuestion, checkNumber);
export default brainPrimegame;
