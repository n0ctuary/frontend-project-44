import getRandomIntInclusive from '../utils.js';
import playGame from '../index.js';

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
  const operands = [getRandomIntInclusive(1, 50), getRandomIntInclusive(1, 50)];
  const arithmeticOperatorAsString = getRandomArithmeticOperatorAsString();
  const specificQuestion = `${operands[0]} ${arithmeticOperatorAsString} ${operands[1]}`;
  const correctAnswer = String(doTheMathWithArithmeticOperatorAsString(
    operands[0],
    operands[1],
    arithmeticOperatorAsString,
  ));
  return [specificQuestion, correctAnswer];
};

const playCalculatorGame = () => {
  playGame(
    generalQuestion,
    generateGameData,
  );
};

export default playCalculatorGame;
