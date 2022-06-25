import { commonLogic, getRandomInt } from '../src/index.js';

const prime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const primeLogic = () => {
    const gameQuestion = getRandomInt(-999, 999);

    const isPrime = (num) => {
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

    const gameAnswer = isPrime(gameQuestion) ? 'yes' : 'no';

    return [gameQuestion, gameAnswer];
  };

  commonLogic(rule, primeLogic);
};

export default prime;
