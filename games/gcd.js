import commonLogic from '../src/index.js';
import getRandomInt from '../src/get-random-Int.js';

const getSmallestNum = (x, y) => {
  if (x < y) {
    return x;
  }

  return y;
};

const gcdLogic = () => {
  const firstNum = getRandomInt(0, 100);
  const secondNum = getRandomInt(0, 100);
  const gameQuestion = `${firstNum} ${secondNum}`;
  const smallestNum = getSmallestNum(firstNum, secondNum);

  let smallestDivisor = 1;

  for (let i = 2; i <= smallestNum; i += 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      smallestDivisor = i;
    }
  }

  const gameAnswer = smallestDivisor.toString();

  return [gameQuestion, gameAnswer];
};

const gcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';

  commonLogic(rule, gcdLogic);
};

export default gcd;
