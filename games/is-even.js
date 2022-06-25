import { commonLogic, getRandomInt } from '../src/index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenLogic = () => {
  const gameQuestion = getRandomInt(0, 100);
  const gameAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

const isEven = () => commonLogic(rule, evenLogic);

export default isEven;
