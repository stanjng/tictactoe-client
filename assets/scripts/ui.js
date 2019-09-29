'use strict'

const app = require('./app.js')
const store = require('./store.js')

const gameBoard = ['', '', '', '', '', '', '', '', '']
let counter = 1

const insert = function (event) {
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

const insertX = function () {
  if (gameBoard[event.target.id] === '') {
    gameBoard[event.target.id] = 'X'
    $('#' + event.target.id).text(`${gameBoard[event.target.id]}`)
    counter++
  } else {
    $('#display-msgs').html('')
    $('#display-msgs').html(`Spot already occupied!`)
  }
  win()
  $('#display-msgs').html('')
  $('#display-msgs').html(`It's O's turn now`)
  console.log(gameBoard)
  console.log(counter)
}

const insertO = function () {
  if (gameBoard[event.target.id] === '') {
    gameBoard[event.target.id] = 'O'
    $('#' + event.target.id).text(`${gameBoard[event.target.id]}`)
    counter++
  } else if (gameBoard[event.target.id]) {
    $('#display-msgs').html('')
    $('#display-msgs').html(`Spot already occupied!`)
  }
  win()
  $('#display-msgs').html('')
  $('#display-msgs').html(`It's X's turn now`)
  console.log(gameBoard)
  console.log(counter)
}

const win = function () {
  if (gameBoard[0] && gameBoard[1] && gameBoard[2]) {
    if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('X wins!')
    } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('O wins!')
    }
  } else if (gameBoard[3] && gameBoard[4] && gameBoard[5]) {
    if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('X wins!')
    } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('O wins!')
    }
  } else if (gameBoard[6] && gameBoard[7] && gameBoard[8]) {
    if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('X wins!')
    } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('O wins!')
    }
  } else if (gameBoard[0] && gameBoard[3] && gameBoard[6]) {
    if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('X wins!')
    } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('O wins!')
    }
  } else if (gameBoard[1] && gameBoard[4] && gameBoard[7]) {
    if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('X wins!')
    } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('O wins!')
    }
  } else if (gameBoard[2] && gameBoard[5] && gameBoard[8]) {
    if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('X wins!')
    } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('O wins!')
    }
  } else if (gameBoard[0] && gameBoard[4] && gameBoard[8]) {
    if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('X wins!')
    } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('O wins!')
    }
  } else if (gameBoard[2] && gameBoard[4] && gameBoard[6]) {
    if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('X wins!')
    } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
      counter = 10
      $('#display-msgs').html('')
      $('#display-msgs').html('O wins!')
    }
  } else {
    console.log("stanley check if something's wrong!")
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
  gameBoard,
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
  onChangePwFailure
}
