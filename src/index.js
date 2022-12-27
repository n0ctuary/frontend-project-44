import * as pairs from '@hexlet/pairs';
import readlineSync from 'readline-sync';

const getRandomIntegerFrom1to50 = () => Math.floor((Math.random() * 50) + 1);

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

const checkUserAnswers = (userAnswer, correctAnswer, i, userName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
      return 'finished';
    }
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${userName}!`);
    return 'finished';
  }
};

export { getRandomIntegerFrom1to50, greetUser, getUserAnswer, checkUserAnswers };