import getRandomIntInclusive from '../utils.js';
import playGame from '../index.js';

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
const generalQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateGameData = () => {
  const specificQuestion = getRandomIntInclusive(1, 131);
  const correctAnswer = isPrime(specificQuestion) ? 'yes' : 'no';
  return [specificQuestion, correctAnswer];
};

const playIsPrimeGame = () => {
  playGame(
    generalQuestion,
    generateGameData,
  );
};

export default playIsPrimeGame;
