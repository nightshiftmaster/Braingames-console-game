import readlineSync from 'readline-sync';

const runGame = (gameAlert, generateData) => {
  console.log('Welcome to the Brain games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameAlert);
  const stepsCount = 3;
  for (let i = 0; i < stepsCount; i += 1) {
    const [question, answer] = generateData();
    console.log('Question:', question);
    const respond = readlineSync.question('Your answer: ');
    if (respond === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${respond}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
export default runGame;
