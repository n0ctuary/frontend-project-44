import getRandomIntInclusive from '../utils.js';
import playGame from '../index.js';

const isEven = (num) => num % 2 === 0;
const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateGameData = () => {
  const specificQuestion = getRandomIntInclusive(1, 50);
  const correctAnswer = isEven(specificQuestion) ? 'yes' : 'no';
  return [specificQuestion, correctAnswer];
};

const playIsEvenGame = () => {
  playGame(
    generalQuestion,
    generateGameData,
  );
};

export default playIsEvenGame;
