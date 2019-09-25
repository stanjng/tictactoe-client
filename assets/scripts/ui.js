'use strict'

const app = require('./app.js')
const store = require('./store.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']
let counter = 0

const insert = function (event) {
  counter++
  // if (counter === 9) {
  //   alert(`it's a tie!`)
  //   counter = 0
  //   console.log(counter)
  // } else
  if (counter % 2 === 0) {
    insertO(event)
  } else if (counter % 2 !== 0) {
    insertX(event)
  } else {
    console.log(`that didn't work`)
  }
}

const insertX = function () {
  gameBoard[event.target.id] = 'X'
  $('#' + event.target.id).text(`${gameBoard[event.target.id]}`)
  console.log(gameBoard)
}

const insertO = function () {
  gameBoard[event.target.id] = 'O'
  $('#' + event.target.id).text(`${gameBoard[event.target.id]}`)
}

console.log(gameBoard)

module.exports = {
  gameBoard,
  counter,
  insert,
  insertO,
  insertX
}
