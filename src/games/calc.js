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
  const question = `${firstNum} ${operand} ${secondNum}`;
  const answer = doCalculation(firstNum, operand, secondNum).toString();

  return [question, answer];
};

const calcGame = () => gameEngine(rule, calcLogic);

export default calcGame;
