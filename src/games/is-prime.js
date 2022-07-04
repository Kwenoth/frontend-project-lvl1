import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeLogic = () => {
  const question = getRandomInt(-999, 999);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const isPrimeGame = () => gameEngine(rule, primeLogic);

export default isPrimeGame;
