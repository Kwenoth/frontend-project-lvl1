import { commonLogic, getRandomInt } from '../src/index.js';

const gameId = 1;

const randomNumber = () => {
  const gameQuestion = getRandomInt(100);
  const gameAnswer = gameQuestion % 2 === 0 ? 'yes' : 'no';
  return [gameQuestion, gameAnswer];
};

const isEven = () => commonLogic(gameId, randomNumber());

export default isEven;
