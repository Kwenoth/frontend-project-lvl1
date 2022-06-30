import commonLogic from '../index.js';
import getRandomInt from '../get-random-Int.js';

const rule = 'What number is missing in the progression?';

const getCollOfNums = (start, weight, step) => {
  const coll = [];
  coll.push(start);

  for (let i = 1; i < weight; i += 1) {
    coll.push(i * step + start);
  }

  return coll;
};

const getCollWithHiddenNum = (arr, index) => {
  const coll = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (i === index) {
      coll.push('..');
    } else {
      coll.push(arr[i]);
    }
  }

  return coll;
};

const progressionLogic = () => {
  const collWeight = getRandomInt(5, 10);
  const startNum = getRandomInt(0, 100);
  const stepOfNums = getRandomInt(1, 5);
  const randomElement = getRandomInt(0, collWeight - 1);

  const collOfNums = getCollOfNums(startNum, collWeight, stepOfNums);

  const collWithHiddenNum = getCollWithHiddenNum(collOfNums, randomElement);

  const gameQuestion = collWithHiddenNum.join(' ');
  const gameAnswer = collOfNums[randomElement].toString();

  return [gameQuestion, gameAnswer];
};

const progression = () => commonLogic(rule, progressionLogic);

export default progression;
