import { commonLogic, getRandomInt } from '../src/index.js';

const progression = () => {
  const rule = 'What number is missing in the progression?';

  const progressionLogic = () => {
    const collOfNums = [];
    const collWeight = getRandomInt(5, 10);
    const stepOfNums = getRandomInt(1, 5);
    const startNum = getRandomInt(0, 100);

    const getCollOfNums = () => {
      collOfNums.push(startNum);
      for (let i = 1; i < collWeight; i += 1) {
        collOfNums.push(collOfNums[i - 1] + stepOfNums);
      }
    };

    getCollOfNums();

    const collWithHiddenNum = [];
    const randomElement = getRandomInt(0, collOfNums.length - 1);

    const getCollWithHiddenNum = () => {
      for (let i = 0; i < collOfNums.length; i += 1) {
        if (i === randomElement) {
          collWithHiddenNum.push('..');
        } else {
          collWithHiddenNum.push(collOfNums[i]);
        }
      }
    };

    getCollWithHiddenNum();

    const gameQuestion = collWithHiddenNum.join(' ');
    const gameAnswer = collOfNums[randomElement].toString();

    return [gameQuestion, gameAnswer];
  };

  commonLogic(rule, progressionLogic);
};

export default progression;
