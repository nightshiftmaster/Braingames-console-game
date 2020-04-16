import game from '../index.js';

const gameAlert = ('Find the greatest common divisor of given numbers.');

let devisor = 0;

const numbers = () => {
  const number1 = (Math.floor(Math.random() * 20) + 1);
  const number2 = (Math.floor(Math.random() * 20) + 1);
  console.log('Question:', number1.toString(), number2.toString());
  for (let i = 0; i <= number1; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      devisor = Math.max(i);
    }
  }
  return devisor;
};
const maxDivisor = () => devisor.toString();

const maxDivisorGame = () => game(gameAlert, numbers, maxDivisor);

export default maxDivisorGame;
