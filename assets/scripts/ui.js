'use strict'

const store = require('./store.js')
const events = require('./events.js')
const scss = require('../styles/index.scss')

const onCreateSuccess = function(responseData) {
  store.game = responseData.game
  counter = 1
  console.log(store.game)
}

const onUpdateSuccess = function(responseData) {
  console.log(store.game)
}

const onGameRetrievalSuccess = function(gameData) {
  console.log(gameData)
  $('#response-display').html(gameData.games.length)
}

const onGameRetrievalFailure = function() {
  console.log('working on it..but something went wrong')
}

// Keeping track of player
let counter = 1
let currentTurn = null

// ----------------------------------------------------------------------------
// INSERT FUNCTIONS
// ----------------------------------------------------------------------------

const insert = function(event) {
  if (counter < 9 && counter % 2 !== 0) {
    insertX(event)
  } else if (counter < 9 && counter % 2 === 0) {
    insertO(event)
  } else if (counter === 9) {
    insertX(event)
    counter = 10
    $('#turn').html('')
    $('#display-msgs').html(`It's a tie!`)
    $('.game-reset').removeAttr('disabled')
  } else if (counter > 9) {
    $('#turn').html('')
    $('#turn').html('The game is over. Play again!')
  } else {
    alert(`Something weird happened.`)
  }
}

const insertX = function() {
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

const insertO = function() {
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

// ----------------------------------------------------------------------------
// WINNING CONDITIONS
// ----------------------------------------------------------------------------
const xWins = function() {
  counter = 10
  $('#turn').html('')
  $('#display-msgs').html('X wins!')
  $('.game-reset').removeAttr('disabled')
}

const oWins = function() {
  counter = 10
  $('#turn').html('')
  $('#display-msgs').html('O wins!')
  $('.game-reset').removeAttr('disabled')
}

const win = function() {
  if ($('#0').html() !== '' && $('#0').html() === $('#1').html() && $('#1').html() === $('#2').html()) {
    if ($('#0').html() === 'X') {
      xWins()
    } else if ($('#0').html() === 'O') {
      oWins()
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#3').html() !== '' && $('#3').html() === $('#4').html() && $('#4').html() === $('#5').html()) {
    if ($('#3').html() === 'X') {
      xWins()
    } else if ($('#3').html() === 'O') {
      oWins()
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#6').html() !== '' && $('#6').html() === $('#7').html() && $('#7').html() === $('#8').html()) {
    if ($('#6').html() === 'X') {
      xWins()
    } else if ($('#3').html() === 'O') {
      oWins()
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#0').html() !== '' && $('#0').html() === $('#3').html() && $('#3').html() === $('#6').html()) {
    if ($('#0').html() === 'X') {
      xWins()
    } else if ($('#0').html() === 'O') {
      oWins()
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#1').html() !== '' && $('#1').html() === $('#4').html() && $('#4').html() === $('#7').html()) {
    if ($('#1').html() === 'X') {
      xWins()
    } else if ($('#1').html() === 'O') {
      oWins()
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#2').html() !== '' && $('#2').html() === $('#5').html() && $('#5').html() === $('#8').html()) {
    if ($('#2').html() === 'X') {
      xWins()
    } else if ($('#2').html() === 'O') {
      oWins()
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#0').html() !== '' && $('#0').html() === $('#4').html() && $('#4').html() === $('#8').html()) {
    if ($('#3').html() === 'X') {
      xWins()
    } else if ($('#3').html() === 'O') {
      oWins()
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#2').html() !== '' && $('#2').html() === $('#4').html() && $('#4').html() === $('#6').html()) {
    if ($('#2').html() === 'X') {
      xWins()
    } else if ($('#2').html() === 'O') {
      oWins()
    } else {
      alert('Something went wrong!')
    }
  } else {
    console.log(`It's still going`)
  }
}

// ----------------------------------------------------------------------------
// END OF GAME
// ----------------------------------------------------------------------------

const isGameOver = function() {
  if (counter === 10) {
    store.game.over = true
  } else {
    store.game.over = false
  }
  return isGameOver
}

// ----------------------------------------------------------------------------
// LOGIN INFO
// ----------------------------------------------------------------------------

const successMessage = function(displayText) {
  $('#auth-msgs').text(displayText)
  $('#auth-msgs').removeClass('failure')
  $('#auth-msgs').addClass('success')
}

const failureMessage = function(displayText) {
  $('#auth-msgs').text(displayText)
  $('#auth-msgs').removeClass('success')
  $('#auth-msgs').addClass('failure')
}

const onSignUpSuccess = function() {
  $('#sign-up').trigger('reset')
  successMessage('SIGNED UP SUCCESFULLY')
}

const onSignUpFailure = function() {
  failureMessage('SIGN UP FAILED')
}

const onSignInSuccess = function(responseData) {
  successMessage('Sign in successful!')
  console.log('Response Data is:', responseData)
  store.user = responseData.user
  console.log('Store is:', store)
  $('.signed-in').attr('disabled', 'true')
  $('.signed-up').attr('disabled', 'true')
  $('.signed-out').removeAttr('disabled')
  $('#sign-in').trigger('reset')
  $('#turn').text('')
  $('#turn').text('Click anywhere in this dialogue to create a game!')
}

const onSignInFailure = function() {
  failureMessage('Sign in failed. Please try again.')
}

const onChangePwSuccess = function() {
  $('#change-pw').trigger('reset')
  $('.signed-in').removeAttr('disabled')
  $('.signed-up').removeAttr('disabled')
  successMessage('Password change successful. Please Login.')
}

const onChangePwFailure = function() {
  failureMessage('Password change unsuccesful. Please try again.')
}

const onSignOutSuccess = function(responseData) {
  successMessage('Sign out successful.')
  $('.signed-in').removeAttr('disabled')
}

const onSignOutFailure = function() {
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
