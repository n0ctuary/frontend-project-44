import { cons, car, cdr } from '@hexlet/pairs';
import {
  getRandomIntegerFrom1to50, greetUser, getUserAnswer, checkUserAnswers,
} from '../src/index.js';

const getRandomArithmeticOperatorAsString = () => {
  const signs = ['+', '-', '*'];
  return signs[Math.floor(Math.random() * 3)];
};

const doTheMathWithArithmeticOperatorAsString = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const playCalculatorGame = () => {
  const userName = greetUser();
  for (let i = 0; ; i += 1) {
    const operands = cons(getRandomIntegerFrom1to50(), getRandomIntegerFrom1to50());
    const arithmeticOperatorAsString = getRandomArithmeticOperatorAsString();
    const questionExpressionAsString = `${car(operands)} ${arithmeticOperatorAsString} ${cdr(operands)}`;
    const correctAnswer = String(doTheMathWithArithmeticOperatorAsString(
      car(operands),
      cdr(operands),
      arithmeticOperatorAsString,
    ));
    console.log('What is the result of the expression?');
    const userAnswer = getUserAnswer(questionExpressionAsString);
    const gameStatus = checkUserAnswers(userAnswer, correctAnswer, i, userName);
    if (gameStatus === 'finished') {
      break;
    }
  }
};

export default playCalculatorGame;
