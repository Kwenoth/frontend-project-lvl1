import gameEngine from '../index.js';
import getRandomInt from '../get-random-Int.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGCD = (x, y) => (x !== 0 ? findGCD(y % x, x) : y);

const gcdLogic = () => {
  const firstNum = getRandomInt(0, 100);
  const secondNum = getRandomInt(0, 100);
  const roundQuestion = `${firstNum} ${secondNum}`;
  const smallestDivisor = findGCD(firstNum, secondNum);

  const roundAnswer = smallestDivisor.toString();

  return [roundQuestion, roundAnswer];
};

const gcdGame = () => gameEngine(rule, gcdLogic);

export default gcdGame;
