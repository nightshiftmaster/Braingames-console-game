import game from '../index.js';

const gameAlert = ('Answer "yes" if given number is prime. Otherwise answer "no".');

const ifPrime = (num) => {
  let answer = '';
  for (let i = 1, amount = 0; i <= num; i += 1) {
    if (num % i === 0) {
      amount += 1;
    }
    answer = (amount > 2 || amount === 1) ? 'no' : 'yes';
  }
  return answer;
};

let num = 0;
const primeQuestion = () => {
  num = (Math.floor(Math.random() * 20) + 1);
  console.log('Question:', num.toString());
};
const checkNumber = () => ifPrime(num);
const brainPrimegame = () => game(gameAlert, primeQuestion, checkNumber);
export default brainPrimegame;
