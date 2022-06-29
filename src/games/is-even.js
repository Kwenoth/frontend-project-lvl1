import commonLogic from '../index.js';
import getRandomInt from '../get-random-Int.js';

const evenLogic = () => {
  const gameQuestion = getRandomInt(0, 100);
  const gameAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';

  return [gameQuestion, gameAnswer];
};

const isEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

  commonLogic(rule, evenLogic);
};

export default isEven;
