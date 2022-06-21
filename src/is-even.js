import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
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

export default isEven;
