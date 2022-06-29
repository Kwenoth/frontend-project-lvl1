import commonLogic from '../index.js';
import getRandomInt from '../get-random-Int.js';

const doMath = (x, operator, y) => {
  let math = 0;
  switch (operator) {
    case '+':
      math = x + y;
      break;

    case '-':
      math = x - y;
      break;

    case '*':
      math = x * y;
      break;

    default:
      math = NaN;
  }
  return math;
};

const calcLogic = () => {
  const arrZnak = ['+', '-', '*'];
  const randomZnak = getRandomInt(0, arrZnak.length - 1);
  const znak = arrZnak[randomZnak];
  const firstNum = getRandomInt(0, 100);
  const secondNum = getRandomInt(0, 100);
  const gameQuestion = `${firstNum} ${znak} ${secondNum}`;
  const gameAnswer = doMath(firstNum, znak, secondNum).toString();

  return [gameQuestion, gameAnswer];
};

const calc = () => {
  const rule = 'What is the result of the expression?';

  commonLogic(rule, calcLogic);
};

export default calc;
