import commonLogic from '../index.js';
import getRandomInt from '../get-random-Int.js';

const rule = 'What is the result of the expression?';
const arrZnak = ['+', '-', '*'];

const doCalculation = (x, operator, y) => {
  switch (operator) {
    case '+':
      return x + y;

    case '-':
      return x - y;

    case '*':
      return x * y;

    default:
      return NaN;
  }
};

const calcLogic = () => {
  const randomZnak = getRandomInt(0, arrZnak.length - 1);
  const znak = arrZnak[randomZnak];
  const firstNum = getRandomInt(0, 100);
  const secondNum = getRandomInt(0, 100);
  const gameQuestion = `${firstNum} ${znak} ${secondNum}`;
  const gameAnswer = doCalculation(firstNum, znak, secondNum).toString();

  return [gameQuestion, gameAnswer];
};

const calc = () => commonLogic(rule, calcLogic);

export default calc;
