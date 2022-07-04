import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

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
  const progressionLength = getRandomInt(5, 10);
  const startNum = getRandomInt(0, 100);
  const step = getRandomInt(1, 5);
  const randomIndex = getRandomInt(0, progressionLength - 1);
  const answer = randomIndex * step + startNum;

  const progression = generateProgression(startNum, progressionLength, step, randomIndex);

  const roundQuestion = progression.join(' ');
  const roundAnswer = answer.toString();

  return [roundQuestion, roundAnswer];
};

const progressionGame = () => gameEngine(rule, progressionLogic);

export default progressionGame;
