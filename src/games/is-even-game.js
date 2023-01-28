import getRandomIntInclusive from '../utils.js';
import playGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateGameData = () => {
  const questionNum = getRandomIntInclusive(1, 50);
  const correctAnswer = isEven(questionNum) ? 'yes' : 'no';
  return [String(questionNum), correctAnswer];
};

const playIsEvenGame = () => {
  playGame(
    description,
    generateGameData,
  );
};

export default playIsEvenGame;
