import readlineSync from 'readline-sync'
import game from '../index.js'

const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * ((max - min) + 1) + min)
}

const getProgression = (start, step, progreslength) => {
  const progression = []
  for (let i = 0; i < progreslength; i++) {
    let currentItem = start + (i * step)
    progression.push(currentItem)
  }
  return progression
}

const calculateAnswer = () => {
  let startElement = getRandomIntInclusive(1, 10)

  let stepMin = 2
  let stepMax = 5
  let step = getRandomIntInclusive(stepMin, stepMax)

  let minProgresLength = 5
  let maxProgresLength = 10
  let progreslength = getRandomIntInclusive(minProgresLength, maxProgresLength)

  let progression = getProgression(startElement, step, progreslength)

  let hiddenItemIndex = getRandomIntInclusive(0, (progression.length - 1))
  let hiddenItem = progression[hiddenItemIndex]
  progression[hiddenItemIndex] = '..'

  console.log(`Question: ${progression.join(' ')}`)
  return String(hiddenItem)
}

const getAnswer = () => {
  let resultGetAnswer = (readlineSync.question('Your answer: '))
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

const startGameProgression = () => {
  const myGreeting = 'What number is missing in the progression?'
  game(myGreeting, checkAnswer)
}

export default startGameProgression
