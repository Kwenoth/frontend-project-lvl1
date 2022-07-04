import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const evenLogic = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const isEvenGame = () => gameEngine(rule, evenLogic);

export default isEvenGame;
