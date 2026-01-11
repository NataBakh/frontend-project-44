import readlineSync from 'readline-sync'
import game from '../index.js'

const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * ((max - min) + 1) + min)
}

const calculateAnswer = () => {
  let randomInt = getRandomIntInclusive(1, 100)
  console.log(`Question: ${randomInt}`)
  if (randomInt < 2) {
    return false
  }

  if (randomInt === 2) {
    return true
  }

  if (randomInt % 2 === 0) {
    return false
  }

  const limit = Math.sqrt(randomInt)
  for (let i = 3; i <= limit; i += 1) {
    if (randomInt % i === 0) {
      return false
    }
  }
  return true
}

const getAnswer = () => {
  let resultGetAnswer = readlineSync.question('Your answer: ').toLowerCase()
  return resultGetAnswer
}

const checkAnswer = () => {
  let calcAnswer = calculateAnswer() ? 'yes' : 'no'
  let userAnswer = getAnswer()
  if (calcAnswer === userAnswer) {
    return true
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calcAnswer}'.`)
    return false
  }
}

const startGamePrime = () => {
  const myGreeting = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  game(myGreeting, checkAnswer)
}

export default startGamePrime
