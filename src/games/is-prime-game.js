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
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateGameData = () => {
  const questionNum = getRandomIntInclusive(1, 131);
  const correctAnswer = isPrime(questionNum) ? 'yes' : 'no';
  return [String(questionNum), correctAnswer];
};

const playIsPrimeGame = () => {
  playGame(
    description,
    generateGameData,
  );
};

export default playIsPrimeGame;
