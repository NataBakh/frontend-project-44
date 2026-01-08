import readlineSync from 'readline-sync'
let userName

const getUserName = () => {
  console.log('Welcome to the Brain Games!')
  userName = readlineSync.question('May I have your name?: ')
  console.log(`Hello, ${userName}`)
  return userName
}

const game = (greeting, roundResult) => {
  let userName = getUserName()
  console.log(greeting)
  let roundCount = 0
  let rounds = 3
  while (roundCount < rounds) {
    if (roundResult()) {
      console.log('Correct!')
      roundCount++
    }

    else {
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  if (roundCount === rounds) {
    console.log(`Congratulations, ${userName}!`)
    return
  }
}

export default game
