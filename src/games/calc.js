import gameEngine from '../index.js';
import getRandomInt from '../get-random-Int.js';

const rule = 'What is the result of the expression?';
const operands = ['+', '-', '*'];

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
  const randomOperand = getRandomInt(0, operands.length - 1);
  const operand = operands[randomOperand];
  const firstNum = getRandomInt(0, 100);
  const secondNum = getRandomInt(0, 100);
  const gameQuestion = `${firstNum} ${operand} ${secondNum}`;
  const gameAnswer = doCalculation(firstNum, operand, secondNum).toString();

  return [gameQuestion, gameAnswer];
};

const calcGame = () => gameEngine(rule, calcLogic);

export default calcGame;
