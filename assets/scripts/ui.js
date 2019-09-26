'use strict'

const app = require('./app.js')
const store = require('./store.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']
let counter = 1

const insert = function (event) {
  if (counter < 9 && counter % 2 === 0) {
    insertX(event)
  } else if (counter < 9 && counter % 2 !== 0) {
    insertO(event)
  } else if (counter === 9) {
    insertX(event)
    alert(`No spots left!!`)
  } else {
    alert(`Sorry, this spot has been taken.`)
  }
  win()
}

const insertX = function () {
  if (gameBoard[event.target.id] === '') {
    gameBoard[event.target.id] = 'X'
    $('#' + event.target.id).text(`${gameBoard[event.target.id]}`)
    counter++
  } else {
    alert('spot occupied!')
  }
  console.log(gameBoard)
  console.log(counter)
}

const insertO = function () {
  if (gameBoard[event.target.id] === '') {
    gameBoard[event.target.id] = 'O'
    $('#' + event.target.id).text(`${gameBoard[event.target.id]}`)
    counter++
  } else {
    alert('spot occupied!')
  }
  console.log(gameBoard)
  console.log(counter)
}

const win = function () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
    if (gameBoard[0] === 'X') {
      alert('Player X won!')
    } else if (gameBoard[0] === 'O') {
      alert('Player O won!')
    }
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
    if (gameBoard[3] === 'X') {
      alert('Player X won!')
    } else if (gameBoard[3] === 'O') {
      alert('Player O won!')
    }
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) {
    if (gameBoard[6] === 'X') {
      alert('Player X won!')
    } else if (gameBoard[6] === 'O') {
      alert('Player O won!')
    }
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
    if (gameBoard[0] === 'X') {
      alert('Player X won!')
    } else if (gameBoard[0] === 'O') {
      alert('Player O won!')
    }
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
    if (gameBoard[1] === 'X') {
      alert('Player X won!')
    } else if (gameBoard[1] === 'O') {
      alert('Player O won!')
    }
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) {
    if (gameBoard[2] === 'X') {
      alert('Player X won!')
    } else if (gameBoard[2] === 'O') {
      alert('Player O won!')
    }
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
    if (gameBoard[0] === 'X') {
      alert('Player X won!')
    } else if (gameBoard[0] === 'O') {
      alert('Player O won!')
    }
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
    if (gameBoard[2] === 'X') {
      alert('Player X won!')
    } else if (gameBoard[2] === 'O') {
      alert('Player O won!')
    }
  }
  console.log('Keep it up!')
}

module.exports = {
  gameBoard,
  counter,
  insert,
  insertO,
  insertX,
  win
}
