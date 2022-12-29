import { cons, car, cdr } from '@hexlet/pairs';
import {
  getRandomIntInclusive, greetUser, getUserAnswer, checkUserAnswers,
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

const playGCDGame = () => {
  const userName = greetUser();
  for (let i = 0; ; i += 1) {
    const questionNumbers = cons(getRandomIntInclusive(10, 50), getRandomIntInclusive(10, 50));
    const correctAnswer = String(findGreatestCommonDivisor(car(questionNumbers), cdr(questionNumbers)));
    console.log('Find the greatest common divisor of given numbers.');
    const userAnswer = getUserAnswer(`${car(questionNumbers)} ${cdr(questionNumbers)}`);
    const gameStatus = checkUserAnswers(userAnswer, correctAnswer, i, userName);
    if (gameStatus === 'finished') {
      break;
    }
  }
};

export default playGCDGame;