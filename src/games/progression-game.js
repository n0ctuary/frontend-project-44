import getRandomIntInclusive from '../utils.js';
import playGame from '../index.js';

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
const generalQuestion = 'What number is missing in the progression?';
const generateGameData = () => {
  const progression = getRandomArythmeticProgression();
  const questionNumIndex = getRandomIntInclusive(0, progression.length - 1);
  const correctAnswer = String(progression[questionNumIndex]);
  progression[questionNumIndex] = '..';
  const specificQuestion = `${progression.join(' ')}`;
  return [specificQuestion, correctAnswer];
};

const playProgressionGame = () => {
  playGame(
    generalQuestion,
    generateGameData,
  );
};

export default playProgressionGame;
