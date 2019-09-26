'use strict'

const app = require('./app.js')
const store = require('./store.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']
let counter = 1

const insert = function(event) {
  if (counter < 9 && counter % 2 !== 0) {
    insertX(event)
  } else if (counter < 9 && counter % 2 === 0) {
    insertO(event)
  } else if (counter === 9) {
    insertX(event)
    alert(`No spots left!! Game over.`)
  } else if (counter > 9) {
    alert('Game is over')
  } else {
    alert(`Something weird happened.`)
  }
}

const insertX = function() {
  if (gameBoard[event.target.id] === '') {
    gameBoard[event.target.id] = 'X'
    $('#' + event.target.id).text(`${gameBoard[event.target.id]}`)
    counter++
  } else {
    alert('spot occupied!')
  }
  win()
  console.log(gameBoard)
  console.log(counter)
}

const insertO = function() {
  if (gameBoard[event.target.id] === '') {
    gameBoard[event.target.id] = 'O'
    $('#' + event.target.id).text(`${gameBoard[event.target.id]}`)
    counter++
  } else if (gameBoard[event.target.id]) {
    alert('spot occupied!')
  }
  win()
  console.log(gameBoard)
  console.log(counter)
}

const win = function() {
  if (gameBoard[0] && gameBoard[1] && gameBoard[2]) {
    if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
      alert('Player X won!')
      counter = 10
    } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
      alert('Player O won!')
      counter = 10
    }
  } else if (gameBoard[3] && gameBoard[4] && gameBoard[5]) {
    if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
      alert('Player X won!')
      counter = 10
    } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
      alert('Player O won!')
      counter = 10
    }
  } else if (gameBoard[6] && gameBoard[7] && gameBoard[8]) {
    if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
      alert('Player X won!')
      counter = 10
    } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
      alert('Player O won!')
      counter = 10
    }
  } else if (gameBoard[0] && gameBoard[3] && gameBoard[6]) {
    if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
      alert('Player X won!')
      counter = 10
    } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
      alert('Player O won!')
      counter = 10
    }
  } else if (gameBoard[1] && gameBoard[4] && gameBoard[7]) {
    if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
      alert('Player X won!')
      counter = 10
    } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
      alert('Player O won!')
      counter = 10
    }
  } else if (gameBoard[2] && gameBoard[5] && gameBoard[8]) {
    if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
      alert('Player X won!')
      counter = 10
    } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
      alert('Player O won!')
      counter = 10
    }
  } else if (gameBoard[0] && gameBoard[4] && gameBoard[8]) {
    if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
      alert('Player X won!')
      counter = 10
    } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
      alert('Player O won!')
      counter = 10
    }
  } else if (gameBoard[2] && gameBoard[4] && gameBoard[6]) {
    if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
      alert('Player X won!')
      counter = 10
    } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
      alert('Player O won!')
      counter = 10
    }
  } else {
    console.log("stanley check if something's wrong!")
  }
}

module.exports = {
  gameBoard,
  counter,
  insert,
  insertO,
  insertX,
  win
}
