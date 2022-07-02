import gameEngine from '../index.js';
import getRandomInt from '../get-random-Int.js';

const rule = 'Find the greatest common divisor of given numbers.';

const nod = (x, y) => (x !== 0 ? nod(y % x, x) : y);

const gcdLogic = () => {
  const firstNum = getRandomInt(0, 100);
  const secondNum = getRandomInt(0, 100);
  const gameQuestion = `${firstNum} ${secondNum}`;
  const smallestDivisor = nod(firstNum, secondNum);

  const gameAnswer = smallestDivisor.toString();

  return [gameQuestion, gameAnswer];
};

const gcd = () => gameEngine(rule, gcdLogic);

export default gcd;
