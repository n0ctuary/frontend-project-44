import { cons, car, cdr } from '@hexlet/pairs';
import {
  getRandomIntInclusive, playGameUntilThreeWinsOrOneLoss,
} from '../src/index.js';

const findGreatestCommonDivisor = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  };
  return a;
};
const generalQuestion = 'Find the greatest common divisor of given numbers.';
const generateGameData = () => {
  const questionNumbers = cons(getRandomIntInclusive(10, 50), getRandomIntInclusive(10, 50));
  const specificQuestion = `${car(questionNumbers)} ${cdr(questionNumbers)}`;
  const correctAnswer = String(
    findGreatestCommonDivisor(car(questionNumbers), cdr(questionNumbers)),
  );
  return cons(specificQuestion, correctAnswer);
};

const playGCDGame = () => {
  playGameUntilThreeWinsOrOneLoss(
    generalQuestion,
    generateGameData,
  );
};

export default playGCDGame;
