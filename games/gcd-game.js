import { cons, car, cdr } from '@hexlet/pairs';
import {
  getRandomIntInclusive, playGameUntilThreeWinsOrOneLoss,
} from '../src/index.js';

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
