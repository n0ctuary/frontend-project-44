import {
  getRandomIntInclusive, greetUser, getUserAnswer, checkUserAnswers,
} from '../src/index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playIsPrimeGame = () => {
  const userName = greetUser();
  for (let i = 0; ; i += 1) {
    const questionNum = getRandomIntInclusive(1, 131);
    const correctAnswer = isPrime(questionNum) ? 'yes' : 'no';
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    const userAnswer = getUserAnswer(`${questionNum}`);
    const gameStatus = checkUserAnswers(userAnswer, correctAnswer, i, userName);
    if (gameStatus === 'finished') {
      break;
    }
  }

};

export default playIsPrimeGame;