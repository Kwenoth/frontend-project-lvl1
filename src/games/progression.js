import commonLogic from '../index.js';
import getRandomInt from '../get-random-Int.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (start, weight, step, index) => {
  const coll = [];
  for (let i = 0; i < weight; i += 1) {
    if (i === index) {
      coll.push('..');
    } else {
      coll.push(i * step + start);
    }
  }

  return coll;
};

const progressionLogic = () => {
  const collWeight = getRandomInt(5, 10);
  const startNum = getRandomInt(0, 100);
  const stepOfNums = getRandomInt(1, 5);
  const randomIndex = getRandomInt(0, collWeight - 1);
  const answer = randomIndex * stepOfNums + startNum;

  const collOfNums = generateProgression(startNum, collWeight, stepOfNums, randomIndex);

  const gameQuestion = collOfNums.join(' ');
  const gameAnswer = answer.toString();

  return [gameQuestion, gameAnswer];
};

const progression = () => commonLogic(rule, progressionLogic);

export default progression;
