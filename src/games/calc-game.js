import getRandomIntInclusive from '../utils.js';
import playGame from '../index.js';

const calculate = (x, y, sign) => {
  switch (sign) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown sign: '${sign}'`);
  }
};
const description = 'What is the result of the expression?';
const generateGameData = () => {
  const operands = [getRandomIntInclusive(1, 50), getRandomIntInclusive(1, 50)];
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomIntInclusive(0, 2)];
  const question = `${operands[0]} ${sign} ${operands[1]}`;
  const correctAnswer = String(calculate(
    operands[0],
    operands[1],
    sign,
  ));
  return [question, correctAnswer];
};

const playCalculatorGame = () => {
  playGame(
    description,
    generateGameData,
  );
};

export default playCalculatorGame;
