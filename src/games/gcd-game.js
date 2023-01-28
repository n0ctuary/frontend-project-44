import getRandomIntInclusive from '../utils.js';
import playGame from '../index.js';

const findGreatestCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};
const description = 'Find the greatest common divisor of given numbers.';
const generateGameData = () => {
  const questionNumbers = [getRandomIntInclusive(10, 50), getRandomIntInclusive(10, 50)];
  const question = `${questionNumbers[0]} ${questionNumbers[1]}`;
  const correctAnswer = String(
    findGreatestCommonDivisor(questionNumbers[0], questionNumbers[1]),
  );
  return [question, correctAnswer];
};

const playGCDGame = () => {
  playGame(
    description,
    generateGameData,
  );
};

export default playGCDGame;
