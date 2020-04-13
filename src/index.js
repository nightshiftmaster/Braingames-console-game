
import readlineSync from 'readline-sync';


const game = (gameAlert, question, reply) => {
  console.log('Welcome to the Brain games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameAlert);
  for (let i = 0; i < 3; i += 1) {
    question();
    const answer = readlineSync.question('Your answer: ');
    if (answer === reply()) {
      console.log('Correct!');
    } else if (answer !== reply()) {
      return console.log(`"${answer}" is wrong answer ;(. Correct answer was "${reply()}". Let's try again,${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
export default game;
