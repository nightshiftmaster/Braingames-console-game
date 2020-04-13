import game from '../index.js';

const gameAlert = ('Find the greatest common divisor of given numbers.');

let devisor = 0;

const numbers = () => {
  const a = (Math.floor(Math.random() * 20) + 1);
  const b = (Math.floor(Math.random() * 20) + 1);
  console.log('Question:', a.toString(), b.toString());
  for (let i = 0; i <= a; i += 1) {
    if (a % i === 0 && b % i === 0) {
      devisor = Math.max(i);
    }
  }
  return devisor;
};
const maxDivisor = () => devisor.toString();

const maxDivisorGame = () => game(gameAlert, numbers, maxDivisor);

export default maxDivisorGame;
