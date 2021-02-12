function main() {
  // Rock Team 1
  const rockTeam1 = document.querySelector('.firstPlayer fieldset i#one')
  function addRock1() {
    const thingClickedOn = document.querySelector('.firstPlayer h3')
    const firstPlayer = document.querySelector('.firstPlayer footer')
    const teamHeader = document.querySelector('.firstPlayer h2')
    const playerName = teamHeader.textContent
    firstPlayer.textContent = `${playerName} has chosen`
    thingClickedOn.textContent = 'Rock'
  }
  rockTeam1.addEventListener('click', addRock1)
  // Paper Team 1
  const paperTeam1 = document.querySelector('.firstPlayer fieldset i#two')
  function addPaper1() {
    const thingClickedOn = document.querySelector('.firstPlayer h3')
    const firstPlayer = document.querySelector('.firstPlayer footer')
    const teamHeader = document.querySelector('.firstPlayer h2')
    const playerName = teamHeader.textContent
    firstPlayer.textContent = `${playerName} has chosen`
    thingClickedOn.textContent = 'Paper'
  }
  paperTeam1.addEventListener('click', addPaper1)
  // Scissors Team 1
  const scissorTeam1 = document.querySelector('.firstPlayer fieldset i#three')
  function addScissor1() {
    const thingClickedOn = document.querySelector('.firstPlayer h3')
    const firstPlayer = document.querySelector('.firstPlayer footer')
    const teamHeader = document.querySelector('.firstPlayer h2')
    const playerName = teamHeader.textContent
    firstPlayer.textContent = `${playerName} has chosen`
    thingClickedOn.textContent = 'Scissor'
  }
  scissorTeam1.addEventListener('click', addScissor1)
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
  const rockTeam2 = document.querySelector('.secondPlayer fieldset i#one')
  function addRock2() {
    const thingClickedOn = document.querySelector('.secondPlayer h3')
    const firstPlayer = document.querySelector('.secondPlayer footer')
    const teamHeader = document.querySelector('.secondPlayer h2')
    const playerName = teamHeader.textContent
    firstPlayer.textContent = `${playerName} has chosen`
    thingClickedOn.textContent = 'Rock'
  }
  rockTeam2.addEventListener('click', addRock2)
  // Paper Team 2
  const paperTeam2 = document.querySelector('.secondPlayer fieldset i#two')
  function addPaper2() {
    const thingClickedOn = document.querySelector('.secondPlayer h3')
    const firstPlayer = document.querySelector('.secondPlayer footer')
    const teamHeader = document.querySelector('.secondPlayer h2')
    const playerName = teamHeader.textContent
    firstPlayer.textContent = `${playerName} has chosen`
    thingClickedOn.textContent = 'Paper'
  }
  paperTeam2.addEventListener('click', addPaper2)
  // Scissors Team 2
  const scissorTeam2 = document.querySelector('.secondPlayer fieldset i#three')
  function addScissor2() {
    const thingClickedOn = document.querySelector('.secondPlayer h3')
    const firstPlayer = document.querySelector('.secondPlayer footer')
    const teamHeader = document.querySelector('.secondPlayer h2')
    const playerName = teamHeader.textContent
    firstPlayer.textContent = `${playerName} has chosen`
    thingClickedOn.textContent = 'Scissor'
  }
  scissorTeam2.addEventListener('click', addScissor2)
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
    if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Scissor') {
      const winner = document.querySelector('.firstPlayer footer')
      const loser = document.querySelector('.secondPlayer footer')
      loser.textContent = ''
      winner.textContent = 'YOU WON!'
    }
    if (firstPlayerChoice === 'Scissor' && secondPlayerChoice === 'Paper') {
      const winner = document.querySelector('.firstPlayer footer')
      const loser = document.querySelector('.secondPlayer footer')
      loser.textContent = ''
      winner.textContent = 'YOU WON!'
    }
    if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Rock') {
      const winner = document.querySelector('.firstPlayer footer')
      const loser = document.querySelector('.secondPlayer footer')
      loser.textContent = ''
      winner.textContent = 'YOU WON!'
    }
    if (firstPlayerChoice === secondPlayerChoice) {
      const draw1 = document.querySelector('.firstPlayer footer')
      const draw2 = document.querySelector('.secondPlayer footer')
      draw1.textContent = 'ITS A DRAW'
      draw2.textContent = 'ITS A DRAW'
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
