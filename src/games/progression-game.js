import getRandomIntInclusive from '../utils.js';
import playGame from '../index.js';

const generateProgression = (startNum, progressionStep, progressionLength) => {
  const result = [startNum];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    result.push(result[result.length - 1] + progressionStep);
  }
  return result;
};
const description = 'What number is missing in the progression?';
const generateGameData = () => {
  const startNum = getRandomIntInclusive(3, 29);
  const progressionStep = getRandomIntInclusive(3, 7);
  const progressionLength = getRandomIntInclusive(5, 12);
  const progression = generateProgression(startNum, progressionStep, progressionLength);
  const questionNumIndex = getRandomIntInclusive(0, progression.length - 1);
  const correctAnswer = String(progression[questionNumIndex]);
  progression[questionNumIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [question, correctAnswer];
};

const playProgressionGame = () => {
  playGame(
    description,
    generateGameData,
  );
};

export default playProgressionGame;
