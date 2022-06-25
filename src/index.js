import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

export const commonLogic = (gameRule, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const questAndAns = gameLogic();
    console.log('Question: ', questAndAns[0]);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = questAndAns[1];

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  console.log(count === 3 ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
};
