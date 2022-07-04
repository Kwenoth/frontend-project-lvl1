import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGCD = (x, y) => (x !== 0 ? findGCD(y % x, x) : y);

const gcdLogic = () => {
  const firstNum = getRandomInt(0, 100);
  const secondNum = getRandomInt(0, 100);
  const question = `${firstNum} ${secondNum}`;
  const smallestDivisor = findGCD(firstNum, secondNum);

  const answer = smallestDivisor.toString();

  return [question, answer];
};

const gcdGame = () => gameEngine(rule, gcdLogic);

export default gcdGame;
