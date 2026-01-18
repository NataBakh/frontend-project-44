// импортируем библиотеку 'readline-sync'
import readlineSync from 'readline-sync'
import getRandomIntInclusive from '../common_function.js'
import game from '../index.js'

const calculateAnswer = () => {
  let randomInt = getRandomIntInclusive(1, 100)
  console.log(`Question: ${randomInt}`)
  let resultCalculateAnswer = randomInt % 2 === 0 ? 'yes' : 'no'
  return resultCalculateAnswer
}

const getAnswer = () => {
  let resultGetAnswer = readlineSync.question('Your answer: ').toLowerCase()
  return resultGetAnswer
}

const checkAnswer = () => {
  let calcAnswer = calculateAnswer()
  let userAnswer = getAnswer()
  if (calcAnswer === userAnswer) {
    return true
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calcAnswer}'.`)
    return false
  }
}

const startGameEven = () => {
  const myGreeting = 'Answer "yes" if the number is even, otherwise answer "no".'
  game(myGreeting, checkAnswer)
}

export default startGameEven
