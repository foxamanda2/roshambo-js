function main() {
  // Rock Team 1
  const rockTeam1 = document.querySelector('.firstPlayer fieldset i.rock')

  function userChoice1(choice) {
    const thingClickedOn = document.querySelector('.firstPlayer h3')
    const firstPlayer = document.querySelector('.firstPlayer footer')
    const teamHeader = document.querySelector('.firstPlayer h2')
    const playerName = teamHeader.textContent
    firstPlayer.textContent = `${playerName} has chosen`
    thingClickedOn.textContent = choice
  }
  function userChoice2(choice) {
    const thingClickedOn = document.querySelector('.secondPlayer h3')
    const firstPlayer = document.querySelector('.secondPlayer footer')
    const teamHeader = document.querySelector('.secondPlayer h2')
    const playerName = teamHeader.textContent
    firstPlayer.textContent = `${playerName} has chosen`
    thingClickedOn.textContent = choice
  }

  function addRock1() {
    userChoice1('Rock')
  }
  rockTeam1.addEventListener('click', addRock1)
  // Paper Team 1
  const paperTeam1 = document.querySelector('.firstPlayer fieldset i.paper')
  function addPaper1() {
    userChoice1('Paper')
  }
  // Scissors Team 1
  const scissorTeam1 = document.querySelector('.firstPlayer fieldset i.scissor')
  function addScissor1() {
    userChoice1('Scissor')
  }
  // Lizard Team 1
  const lizardTeam1 = document.querySelector('.firstPlayer fieldset i.lizard')
  function addLizard1() {
    userChoice1('Lizard')
  }
  // Spock Team 1
  const spockTeam1 = document.querySelector('.firstPlayer fieldset i.spock')
  function addSpock1() {
    userChoice1('Spock')
  }

  lizardTeam1.addEventListener('click', addLizard1)
  scissorTeam1.addEventListener('click', addScissor1)
  paperTeam1.addEventListener('click', addPaper1)
  spockTeam1.addEventListener('click', addSpock1)
  // Team 1 name
  function updateListName1(event) {
    const listName = document.querySelector('.firstPlayer h2')
    listName.textContent = event.target.value
    console.log(event.target.value)
    console.log(event)
  }
  document
    .querySelector('.firstPlayer input')
    .addEventListener('input', updateListName1)

  // Rock Team 2
  const rockTeam2 = document.querySelector('.secondPlayer fieldset i.rock')
  function addRock2() {
    userChoice2('Rock')
  }
  // Paper Team 2
  const paperTeam2 = document.querySelector('.secondPlayer fieldset i.paper')
  function addPaper2() {
    userChoice2('Paper')
  }
  // Scissors Team 2
  const scissorTeam2 = document.querySelector(
    '.secondPlayer fieldset i.scissor'
  )
  function addScissor2() {
    userChoice2('Scissor')
  }
  // Lizard Team 2
  const lizardTeam2 = document.querySelector('.secondPlayer fieldset i.lizard')
  function addLizard2() {
    userChoice2('Lizard')
  }
  // Spock Team 2
  const spockTeam2 = document.querySelector('.secondPlayer fieldset i.spock')
  function addSpock2() {
    userChoice2('Spock')
  }
  lizardTeam2.addEventListener('click', addLizard2)
  scissorTeam2.addEventListener('click', addScissor2)
  paperTeam2.addEventListener('click', addPaper2)
  rockTeam2.addEventListener('click', addRock2)
  spockTeam2.addEventListener('click', addSpock2)
  // Team 2 name
  function updateListName2(event) {
    const listName = document.querySelector('.secondPlayer h2')
    listName.textContent = event.target.value
    console.log(event.target.value)
    console.log(event)
  }
  document
    .querySelector('.secondPlayer input')
    .addEventListener('input', updateListName2)

  //  Comparisons
  const winnerButton = document.querySelector('aside.winner button')
  function winner() {
    const firstPlayer = document.querySelector('.firstPlayer h3')
    const firstPlayerChoice = firstPlayer.textContent
    const secondPlayer = document.querySelector('.secondPlayer h3')
    const secondPlayerChoice = secondPlayer.textContent
    if (firstPlayerChoice === secondPlayerChoice) {
      const draw1 = document.querySelector('.firstPlayer footer')
      const draw2 = document.querySelector('.secondPlayer footer')
      draw1.textContent = 'ITS A DRAW'
      draw2.textContent = 'ITS A DRAW'
    }
    if (
      (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Scissor') ||
      (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Lizard') ||
      (firstPlayerChoice === 'Scissor' && secondPlayerChoice === 'Paper') ||
      (firstPlayerChoice === 'Scissor' && secondPlayerChoice === 'Lizard') ||
      (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Rock') ||
      (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Spock') ||
      (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Paper') ||
      (firstPlayerChoice === 'Lizard' && secondPlayerChoice === 'Spock') ||
      (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Rock') ||
      (firstPlayerChoice === 'Spock' && secondPlayerChoice === 'Scissors')
    ) {
      const winner = document.querySelector('.firstPlayer footer')
      const loser = document.querySelector('.secondPlayer footer')
      loser.textContent = ''
      winner.textContent = 'YOU WON!'
    } else {
      const winner = document.querySelector('.secondPlayer footer')
      const loser = document.querySelector('.firstPlayer footer')
      loser.textContent = ''
      winner.textContent = 'YOU WON!'
    }
  }
  winnerButton.addEventListener('click', winner)

  // Try Again
}
document.addEventListener('DOMContentLoaded', main)
