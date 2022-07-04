import gameEngine from '../index.js';
import getRandomInt from '../get-random-int.js';

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
  const roundQuestion = `${firstNum} ${operand} ${secondNum}`;
  const roundAnswer = doCalculation(firstNum, operand, secondNum).toString();

  return [roundQuestion, roundAnswer];
};

const calcGame = () => gameEngine(rule, calcLogic);

export default calcGame;
