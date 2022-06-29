import commonLogic from '../index.js';
import getRandomInt from '../get-random-Int.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const isPrime = () => commonLogic(rule, primeLogic);

export default isPrime;
