import readlineSync from 'readline-sync';

const runGame = (gameAlert, gameData) => {
  console.log('Welcome to the Brain games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameAlert);
  const stepCount = 3;
  for (let i = 0; i < stepCount; i += 1) {
    const [question, reply] = gameData();
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === reply) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. 
Correct answer was "${reply}". Let's try again,${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default runGame;
