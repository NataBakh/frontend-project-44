import readlineSync from 'readline-sync'
import game from '../index.js'

const getRandomIntInclusive = (min, max) => {
  return Math.floor(Math.random() * ((max - min) + 1) + min)
}

const calculateAnswer = () => {
  let num1 = getRandomIntInclusive(1, 100)
  let num2 = getRandomIntInclusive(1, 100)

  const operators = ['+', '-', '*']
  let codeOperator = getRandomIntInclusive(0, 2)
  let operator = operators[codeOperator]
  let resultExpession
  switch (operator) {
    case '+':
      resultExpession = num1 + num2
      break
    case '-':
      resultExpession = num1 - num2
      break
    case '*':
      resultExpession = num1 * num2
  }

  console.log(`Question: ${num1} ${operator} ${num2}`)
  // console.log(resultExpession)
  return resultExpession
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

const startGameCalc = () => {
  const myGreeting = 'What is the result of the expression?'
  game(myGreeting, checkAnswer)
}

export default startGameCalc
