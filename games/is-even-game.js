import { cons } from '@hexlet/pairs';
import {
  getRandomIntInclusive, playGameUntilThreeWinsOrOneLoss,
} from '../src/index.js';

const isEven = (num) => num % 2 === 0;
const generalQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateGameData = () => {
  const specificQuestion = getRandomIntInclusive(1, 50);
  const correctAnswer = isEven(specificQuestion) ? 'yes' : 'no';
  return cons(specificQuestion, correctAnswer);
};

const playIsEvenGame = () => {
  playGameUntilThreeWinsOrOneLoss(
    generalQuestion,
    generateGameData,
  );
};

export default playIsEvenGame;
