import gameEngine from '../index.js';
import getRandomInt from '../get-random-Int.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNum = (num) => num % 2 === 0;

const evenLogic = () => {
  const roundQuestion = getRandomInt(0, 100);
  const roundAnswer = isEvenNum(roundQuestion) ? 'yes' : 'no';

  return [roundQuestion, roundAnswer];
};

const isEvenGame = () => gameEngine(rule, evenLogic);

export default isEvenGame;
