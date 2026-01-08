// импортируем библиотеку 'readline-sync'
import readlineSync from 'readline-sync'

let userName

// пишем функцию, возвращающую случайное число от 1 до 100
const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * ((max - min) + 1) + min)
}

// пишем функцию приветствие
const myGreetings = () => {
  userName = readlineSync.question('May I have your name?: ')
  console.log(`Hello, ${userName}`)
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`)
}

const getAnswer = () => {
// resultAnswerUser = readlineSync.question('Your answer: ')
// resultAnswerUser = resultAnswerUser.toLowerCase()
  return readlineSync.question('Your answer: ').toLowerCase()
}

const calculateAnswer = () => {
  let randomInt = getRandomIntInclusive(1, 100)
  console.log(`Question: ${randomInt}`)
  return randomInt % 2 === 0 ? 'yes' : 'no'
}

const checkAnswer = () => {
  let calcAnswer = calculateAnswer()
  let userAnswer = getAnswer()
  if (calcAnswer === userAnswer) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${calcAnswer}.
      Let's try again, ${userName}!`)
    return false
  }
}

const chekEvenGame = () => {
  myGreetings()
  let k = 0
  let rounds = 3
  while (k < rounds) {
    if (checkAnswer()) {
      k++
    }
    else {
      break
    }
  }
  if (k === rounds) {
    console.log(`Congratulations, ${userName}!`)
  }
}

export default chekEvenGame

// game(checkAnswer)
