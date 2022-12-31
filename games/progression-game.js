import {
  getRandomIntInclusive, greetUser, getUserAnswer, checkUserAnswers,
} from '../src/index.js';

const getRandomArythmeticProgression = () => {
  const startNum = getRandomIntInclusive(3, 29);
  const progressionStep = getRandomIntInclusive(3, 7);
  const progressionLength = getRandomIntInclusive(5, 12);
  const result = [startNum];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    result.push(result[result.length - 1] + progressionStep);
  }
  return result;
};

const playProgressionGame = () => {
  const userName = greetUser();
  for (let i = 0; ; i += 1) {
    const progression = getRandomArythmeticProgression();
    const questionNumIndex = getRandomIntInclusive(0, progression.length - 1);
    const correctAnswer = String(progression[questionNumIndex]);
    progression[questionNumIndex] = '..';
    console.log('What number is missing in the progression?');
    const userAnswer = getUserAnswer(`${progression.join(' ')}`);
    const gameStatus = checkUserAnswers(userAnswer, correctAnswer, i, userName);
    if (gameStatus === 'finished') {
      break;
    }
  }
};

export default playProgressionGame;
