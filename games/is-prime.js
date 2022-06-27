import commonLogic from '../src/index.js';
import getRandomInt from '../src/get-random-Int.js';

const isPrimeNum = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeLogic = () => {
  const rangeStart = -999;
  const rangeEnd = 999;
  const gameQuestion = getRandomInt(rangeStart, rangeEnd);
  const gameAnswer = isPrimeNum(gameQuestion) ? 'yes' : 'no';

  return [gameQuestion, gameAnswer];
};

const isPrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  commonLogic(rule, primeLogic);
};

export default isPrime;
