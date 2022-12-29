import {
  getRandomIntInclusive, greetUser, getUserAnswer, checkUserAnswers,
} from '../src/index.js';

const isEven = (num) => num % 2 === 0;

const playIsEvenGame = () => {
  const userName = greetUser();
  for (let i = 0; ; i += 1) {
    const questionNum = getRandomIntInclusive(1, 50);
    const correctAnswer = isEven(questionNum) ? 'yes' : 'no';
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const userAnswer = getUserAnswer(`${questionNum}`);
    const gameStatus = checkUserAnswers(userAnswer, correctAnswer, i, userName);
    if (gameStatus === 'finished') {
      break;
    }
  }
};

export default playIsEvenGame;
