import { commonLogic, getRandomInt } from '../src/index.js';

const calc = () => {
  const rule = 'What is the result of the expression?';

  const calcLogic = () => {
    const arrZnak = ['+', '-', '*'];
    const randomZnak = getRandomInt(0, arrZnak.length - 1);
    const znak = arrZnak[randomZnak];
    const firstNum = getRandomInt(0, 100);
    const secondNum = getRandomInt(0, 100);

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

    const gameQuestion = `${firstNum} ${znak} ${secondNum}`;
    console.log(gameQuestion);
    const gameAnswer = doMath(firstNum, znak, secondNum).toString();

    return [gameQuestion, gameAnswer];
  };

  commonLogic(rule, calcLogic);
};

export default calc;
