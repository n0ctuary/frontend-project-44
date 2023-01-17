import { car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  const roundedUpMin = Math.ceil(min);
  const roundedDownMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedDownMax - roundedUpMin + 1)) + roundedUpMin;
};

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const playGameUntilThreeWinsOrOneLoss = (
  generalQuestion,
  generateGameData,
) => {
  const userName = greetUser();
  for (let i = 0; i < 3; i += 1) {
    const gameData = generateGameData();
    const specificQuestion = car(gameData);
    const correctAnswer = cdr(gameData);
    console.log(generalQuestion);
    const userAnswer = getUserAnswer(specificQuestion);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export {
  getRandomIntInclusive, playGameUntilThreeWinsOrOneLoss,
};
