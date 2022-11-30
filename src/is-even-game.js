import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;
const getRandomIntegerFrom1to50 = () => Math.floor(Math.random() * 51);

const playIsEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 0; ; i += 1) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const questionNum = getRandomIntegerFrom1to50();
    const correctAnswer = isEven(questionNum) ? 'yes' : 'no';
    console.log(`Question: ${questionNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export default playIsEvenGame;
