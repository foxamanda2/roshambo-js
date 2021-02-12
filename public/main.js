function main() {
  // Rock Team 1
  const rockTeam1 = document.querySelector('.firstPlayer fieldset i#one')
  function addRock1() {
    const thingClickedOn = document.querySelector('.firstPlayer h3')
    thingClickedOn.textContent = 'Rock'
  }
  rockTeam1.addEventListener('click', addRock1)
  // Paper Team 1
  const paperTeam1 = document.querySelector('.firstPlayer fieldset i#two')
  function addPaper1() {
    const thingClickedOn = document.querySelector('.firstPlayer h3')
    thingClickedOn.textContent = 'Paper'
  }
  paperTeam1.addEventListener('click', addPaper1)

  // Scissors Team 1
  const scissorTeam1 = document.querySelector('.firstPlayer fieldset i#three')
  function addScissor1() {
    const thingClickedOn = document.querySelector('.firstPlayer h3')
    thingClickedOn.textContent = 'Scissor'
  }
  scissorTeam1.addEventListener('click', addScissor1)

  // Rock Team 2
  const rockTeam2 = document.querySelector('.secondPlayer fieldset i#one')
  function addRock2() {
    const thingClickedOn = document.querySelector('.secondPlayer h3')
    thingClickedOn.textContent = 'Rock'
  }
  rockTeam2.addEventListener('click', addRock2)
  // Paper Team 2
  const paperTeam2 = document.querySelector('.secondPlayer fieldset i#two')
  function addPaper2() {
    const thingClickedOn = document.querySelector('.secondPlayer h3')
    thingClickedOn.textContent = 'Paper'
  }
  paperTeam2.addEventListener('click', addPaper2)

  // Scissors Team 2
  const scissorTeam2 = document.querySelector('.secondPlayer fieldset i#three')
  function addScissor2() {
    const thingClickedOn = document.querySelector('.secondPlayer h3')
    thingClickedOn.textContent = 'Scissor'
  }
  scissorTeam2.addEventListener('click', addScissor2)

  //  Comparisons
  const firstPlayerChoice = document.querySelector('.firstPlayer h3')
  const secondPlayerChoice = document.querySelector('.secondPlayer h3')

  function winner() {
    if (firstPlayerChoice === secondPlayerChoice) {
      const draw = document.querySelector('section footer')
      draw.textContent = 'ITS A DRAW'
    }
    if (firstPlayerChoice === 'Rock' && secondPlayerChoice === 'Scissors') {
      const winner = document.querySelector('.firstPlayer footer')
      winner.textContent = 'YOU WON!'
    }
    if (firstPlayerChoice === 'Scissor' && secondPlayerChoice === 'Rock') {
      const winner = document.querySelector('.firstPlayer footer')
      winner.textContent = 'YOU WON!'
    }
    if (firstPlayerChoice === 'Paper' && secondPlayerChoice === 'Rock') {
      const winner = document.querySelector('.firstPlayer footer')
      winner.textContent = 'YOU WON!'
    } else {
      const winner = document.querySelector('.secondPlayer footer')
      winner.textContent = 'YOU WON!'
    }
  }
  firstPlayerChoice.addEventListener('click', winner)
  secondPlayerChoice.addEventListener('click', winner)
}

document.addEventListener('DOMContentLoaded', main)
