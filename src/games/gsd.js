import readlineSync from 'readline-sync'
import game from '../index.js'

const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * ((max - min) + 1) + min)
}

const calculateAnswer = () => {
  let randomInt1 = getRandomIntInclusive(1, 50)
  let randomInt2 = getRandomIntInclusive(1, 50)
  console.log(`Question: ${randomInt1} ${randomInt2}`)
  while (randomInt2 !== 0) {
    let temp = randomInt2
    randomInt2 = randomInt1 % randomInt2
    randomInt1 = temp
  }
  return randomInt1
}

const getAnswer = () => {
  let resultGetAnswer = Number(readlineSync.question('Your answer: '))
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

const startGameGsd = () => {
  const myGreeting = 'Find the greatest common divisor of given numbers'
  game(myGreeting, checkAnswer)
}

export default startGameGsd
