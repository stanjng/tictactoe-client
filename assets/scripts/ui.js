'use strict'

const store = require('./store.js')

const onCreateSuccess = function (responseData) {
  $('#turn').text(`You'll be playing as X. Please go first!`)
  store.game = responseData.game
  console.log(store.game)
}

const onUpdateSuccess = function (responseData) {
  console.log(store.game)
}

const onGameRetrievalSuccess = function (formData) {
  console.log(formData)
  formData.games.forEach(game => {
    const gameHTML = (`
      <h4>ID: ${game.id}</h4>
      <p>Cells: ${game.cells}</p>
      <p>Game Over?: ${game.over}</p>
      <p>Email: ${game.player_x.email}</p>
      <br>
      `)
    $('#response-display').append(gameHTML)
  })
}

const onGameRetrievalFailure = function () {
  console.log('working on it..but something went wrong')
}

const isGameOver = function () {
  if (counter === 10) {
    store.game.over = true
  } else {
    store.game.over = false
  }
  return isGameOver
}

// Keeping track of player
let counter = 1
let currentTurn = null

const insert = function (event) {
  if (counter < 9 && counter % 2 !== 0) {
    insertX(event)
  } else if (counter < 9 && counter % 2 === 0) {
    insertO(event)
  } else if (counter === 9) {
    insertX(event)
    alert(`No spots left!! Game over.`)
  } else if (counter > 9) {
    $('#turn').html('')
    $('#turn').html('The game is over. Play again!')
  } else {
    alert(`Something weird happened.`)
  }
}

const insertX = function () {
  if (store.game.cells[event.target.id] === '') {
    store.game.cells[event.target.id] = 'X'
    $('#' + event.target.id).text(`${store.game.cells[event.target.id]}`)
    counter++
  } else {
    $('#display-msgs').html('')
    $('#display-msgs').html(`Spot already occupied!`)
  }
  win()
  $('#turn').html('')
  $('#turn').html(`It's O's turn now`)
  currentTurn = 'O'
  console.log(store.game.cells)
  console.log(counter)
  console.log(currentTurn)
}

const insertO = function () {
  if (store.game.cells[event.target.id] === '') {
    store.game.cells[event.target.id] = 'O'
    $('#' + event.target.id).text(`${store.game.cells[event.target.id]}`)
    counter++
  } else if (store.game.cells[event.target.id]) {
    $('#display-msgs').html('')
    $('#display-msgs').html(`Spot already occupied!`)
  }
  win()
  $('#turn').html('')
  $('#turn').html(`It's X's turn now`)
  currentTurn = 'X'
  console.log(store.game.cells)
  console.log(counter)
  console.log(currentTurn)
}

const win = function () {
  if (store.game.cells[0] && store.game.cells[1] && store.game.cells[2]) {
    if (store.game.cells[0] === 'X' && store.game.cells[1] === 'X' && store.game.cells[2] === 'X') {
      counter = 10
      $('#display-msgs').html('X wins!')
    } else if (store.game.cells[0] === 'O' && store.game.cells[1] === 'O' && store.game.cells[2] === 'O') {
      counter = 10
      $('#display-msgs').html('O wins!')
    }
  } else if (store.game.cells[3] && store.game.cells[4] && store.game.cells[5]) {
    if (store.game.cells[3] === 'X' && store.game.cells[4] === 'X' && store.game.cells[5] === 'X') {
      counter = 10
      $('#display-msgs').html('X wins!')
    } else if (store.game.cells[3] === 'O' && store.game.cells[4] === 'O' && store.game.cells[5] === 'O') {
      counter = 10
      $('#display-msgs').html('O wins!')
    }
  } else if (store.game.cells[6] && store.game.cells[7] && store.game.cells[8]) {
    if (store.game.cells[6] === 'X' && store.game.cells[7] === 'X' && store.game.cells[8] === 'X') {
      counter = 10
      $('#display-msgs').html('X wins!')
    } else if (store.game.cells[6] === 'O' && store.game.cells[7] === 'O' && store.game.cells[8] === 'O') {
      counter = 10
      $('#display-msgs').html('O wins!')
    }
  } else if (store.game.cells[0] && store.game.cells[3] && store.game.cells[6]) {
    if (store.game.cells[0] === 'X' && store.game.cells[3] === 'X' && store.game.cells[6] === 'X') {
      counter = 10
      $('#display-msgs').html('X wins!')
    } else if (store.game.cells[0] === 'O' && store.game.cells[3] === 'O' && store.game.cells[6] === 'O') {
      counter = 10
      $('#display-msgs').html('O wins!')
    }
  } else if (store.game.cells[1] && store.game.cells[4] && store.game.cells[7]) {
    if (store.game.cells[1] === 'X' && store.game.cells[4] === 'X' && store.game.cells[7] === 'X') {
      counter = 10
      $('#display-msgs').html('X wins!')
    } else if (store.game.cells[1] === 'O' && store.game.cells[4] === 'O' && store.game.cells[7] === 'O') {
      counter = 10
      $('#display-msgs').html('O wins!')
    }
  } else if (store.game.cells[2] && store.game.cells[5] && store.game.cells[8]) {
    if (store.game.cells[2] === 'X' && store.game.cells[5] === 'X' && store.game.cells[8] === 'X') {
      counter = 10
      $('#display-msgs').html('X wins!')
    } else if (store.game.cells[2] === 'O' && store.game.cells[5] === 'O' && store.game.cells[8] === 'O') {
      counter = 10
      $('#display-msgs').html('O wins!')
    }
  } else if (store.game.cells[0] && store.game.cells[4] && store.game.cells[8]) {
    if (store.game.cells[0] === 'X' && store.game.cells[4] === 'X' && store.game.cells[8] === 'X') {
      counter = 10
      $('#display-msgs').html('X wins!')
    } else if (store.game.cells[0] === 'O' && store.game.cells[4] === 'O' && store.game.cells[8] === 'O') {
      counter = 10
      $('#display-msgs').html('O wins!')
    }
  } else if (store.game.cells[2] && store.game.cells[4] && store.game.cells[6]) {
    if (store.game.cells[2] === 'X' && store.game.cells[4] === 'X' && store.game.cells[6] === 'X') {
      counter = 10
      $('#display-msgs').html('X wins!')
    } else if (store.game.cells[2] === 'O' && store.game.cells[4] === 'O' && store.game.cells[6] === 'O') {
      counter = 10
      $('#display-msgs').html('O wins!')
    }
  } else {
    console.log(store.game)
  }
}

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

const successMessage = function (displayText) {
  $('#auth-msgs').text(displayText)
  $('#auth-msgs').removeClass('failure')
  $('#auth-msgs').addClass('success')
}

const failureMessage = function (displayText) {
  $('#auth-msgs').text(displayText)
  $('#auth-msgs').removeClass('success')
  $('#auth-msgs').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('SIGNED UP SUCCESFULLY')
}

const onSignUpFailure = function () {
  failureMessage('SIGN UP FAILED')
}

const onSignInSuccess = function (responseData) {
  successMessage('Sign in successful!')
  console.log('Response Data is:', responseData)
  store.user = responseData.user
  console.log('Store is:', store)
  $('.signed-in').attr('disabled', 'true')
  $('.signed-out').removeAttr('disabled')
  $('#turn').text('')
  $('#turn').text('Click anywhere in this dialogue to create a game!')
}

const onSignInFailure = function () {
  failureMessage('Sign in failed. Please try again.')
}

const onChangePwSuccess = function () {
  successMessage('Password change successful. Please Login.')
}

const onChangePwFailure = function () {
  failureMessage('Password change unsuccesful. Please try again.')
}

const onSignOutSuccess = function (responseData) {
  successMessage('Sign out successful.')
  $('.signed-in').removeAttr('disabled')
}

const onSignOutFailure = function () {
  failureMessage('Sign out unsuccessful.')
}

module.exports = {
  onCreateSuccess,
  onUpdateSuccess,
  counter,
  insert,
  insertO,
  insertX,
  win,
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePwFailure,
  onGameRetrievalSuccess,
  onGameRetrievalFailure,
  currentTurn,
  isGameOver
}
