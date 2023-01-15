import { cons, car, cdr } from '@hexlet/pairs';
import {
  getRandomIntInclusive, playGameUntilThreeWinsOrOneLoss,
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
const generalQuestion = 'What is the result of the expression?';
const generateGameData = () => {
  const operands = cons(getRandomIntInclusive(1, 50), getRandomIntInclusive(1, 50));
  const arithmeticOperatorAsString = getRandomArithmeticOperatorAsString();
  const specificQuestion = `${car(operands)} ${arithmeticOperatorAsString} ${cdr(operands)}`;
  const correctAnswer = String(doTheMathWithArithmeticOperatorAsString(
    car(operands),
    cdr(operands),
    arithmeticOperatorAsString,
  ));
  return cons(specificQuestion, correctAnswer);
};

const playCalculatorGame = () => {
  playGameUntilThreeWinsOrOneLoss(
    generalQuestion,
    generateGameData,
  );
};

export default playCalculatorGame;
