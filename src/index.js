
import readlineSync from 'readline-sync';


const game = (gameAlert, question, reply) => {
  console.log('Welcome to the Brain games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameAlert);
  const congratulation = (`Congratulations, ${userName}`);
  const steps = 3;
  for (let i = 0; i < steps; i += 1) {
    console.log('Question:', question());
    const answer = readlineSync.question('Your answer: ');
    const rightAlert = ('Correct!');
    const wrongAlert = (`"${answer}" is wrong answer ;(. Correct answer was "${reply()}". Let's try again,${userName}`);
    if (answer === reply()) {
      console.log(rightAlert);
    } else if (answer !== reply()) {
      return console.log(wrongAlert);
    }
  }
  return console.log(congratulation);
};
export default game;
