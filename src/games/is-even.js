import commonLogic from '../index.js';
import getRandomInt from '../get-random-Int.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNum = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const evenLogic = () => {
  const gameQuestion = getRandomInt(0, 100);
  const gameAnswer = evenNum(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, gameAnswer];
};

const isEven = () => commonLogic(rule, evenLogic);

export default isEven;
