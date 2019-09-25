'use strict'

const app = require('./app.js')
const store = require('./store.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']
let counter = 1
const check = function () {
  if (gameBoard[0] === gameBoard[1] === gameBoard[2]) {
    alert('One of the players won')
  }
}

const insert = function (event) {
  if (counter % 2 !== 0) {
    insertX(event)
    check()
  } else if (counter % 2 === 0) {
    insertO(event)
    check()
  } else if (counter === 9) {
    alert(`it's a tie!`)
    counter = 0
  } else {
    console.log('not sure what happened there')
  }
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

console.log(gameBoard)

module.exports = {
  gameBoard,
  counter,
  insert,
  insertO,
  insertX
}
