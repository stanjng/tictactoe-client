'use strict'

const store = require('./store.js')
const scss = require('../styles/index.scss')

// ----------------------------------------------------------------------------
// API-GAME RECORDING
// ----------------------------------------------------------------------------

const onCreateSuccess = function (responseData) {
  store.game = responseData.game
  counter = 1
  $('#display-msgs').html('')
  $('#display-msgs').html(`You'll be playing as X. Please go first!`)
}

const onUpdateSuccess = function (responseData) {}

const onGameRetrievalSuccess = function (gameData) {
  $('#response-display').html(`Total number of games played: ${gameData.games.length}`)
  setTimeout(function () {
    $('#response-display').html('')
  }, 4000)
}

const onGameRetrievalFailure = function () {
  alert('Not sure what happened just now, but please refresh the browser to begin again!')
}

// ----------------------------------------------------------------------------
// INSERT FUNCTIONS
// ----------------------------------------------------------------------------

// Keeping track of player
let counter = 1
let currentTurn = null

const insert = function (event) {
  if (counter <= 9 && counter % 2 !== 0) {
    insertX(event)
  } else if (counter < 9 && counter % 2 === 0) {
    insertO(event)
  } else if (counter === 9) {
    insertX(event)
    counter++
    $('#display-msgs').html('')
    $('.game-reset').removeAttr('disabled')
  } else if (counter === 10) {
    win()
    $('#display-msgs').html('')
    $('#display-msgs').html('The game is over. Press "Start New Game" to play again!')
  } else if (counter === 11) {
    win()
    $('#display-msgs').html('')
    $('#display-msgs').html('Please sign-in to start a new game!')
  } else if (counter === 12) {
    win()
    $('#display-msgs').html('')
    $('#display-msgs').html('Click "Start New Game" to begin!')
  } else {
    alert(`Something weird happened.`)
  }
}

const insertX = function () {
  if (store.game.cells[event.target.id] === '') {
    store.game.cells[event.target.id] = 'X'
    $('#' + event.target.id).text(`${store.game.cells[event.target.id]}`)
    counter++
    $('#display-msgs').html('')
    $('#display-msgs').html(`It's O's turn now`)
  } else {
    $('#display-msgs').html('')
    $('#display-msgs').html(`Spot already occupied!`)
  }
  win()
  currentTurn = 'O'
}

const insertO = function () {
  if (store.game.cells[event.target.id] === '') {
    store.game.cells[event.target.id] = 'O'
    $('#' + event.target.id).text(`${store.game.cells[event.target.id]}`)
    counter++
    $('#display-msgs').html('')
    $('#display-msgs').html(`It's X's turn now`)
  } else if (store.game.cells[event.target.id]) {
    $('#display-msgs').html('')
    $('#display-msgs').html(`Spot already occupied!`)
  }
  win()
  currentTurn = 'X'
}

// ----------------------------------------------------------------------------
// WINNING CONDITIONS
// ----------------------------------------------------------------------------
const xWins = function () {
  counter = 10
  $('#display-msgs').html('')
  $('#display-msgs').html('X wins! Press "Start New Game" to play again!')
  $('.game-reset').removeAttr('disabled')
}

const oWins = function () {
  counter = 10
  $('#display-msgs').html('')
  $('#display-msgs').html('O wins! Press "Start New Game" to play again!')
  $('.game-reset').removeAttr('disabled')
}

const win = function () {
  if ($('#0').html() !== '' && $('#0').html() === $('#1').html() && $('#1').html() === $('#2').html()) {
    if ($('#0').html() === 'X') {
      xWins()
      $('#0').css('background-color', 'black')
      $('#1').css('background-color', 'black')
      $('#2').css('background-color', 'black')
    } else if ($('#0').html() === 'O') {
      oWins()
      $('#0').css('background-color', 'black')
      $('#1').css('background-color', 'black')
      $('#2').css('background-color', 'black')
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#3').html() !== '' && $('#3').html() === $('#4').html() && $('#4').html() === $('#5').html()) {
    if ($('#3').html() === 'X') {
      xWins()
      $('#3').css('background-color', 'black')
      $('#4').css('background-color', 'black')
      $('#5').css('background-color', 'black')
    } else if ($('#3').html() === 'O') {
      oWins()
      $('#3').css('background-color', 'black')
      $('#4').css('background-color', 'black')
      $('#5').css('background-color', 'black')
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#6').html() !== '' && $('#6').html() === $('#7').html() && $('#7').html() === $('#8').html()) {
    if ($('#6').html() === 'X') {
      xWins()
      $('#6').css('background-color', 'black')
      $('#7').css('background-color', 'black')
      $('#8').css('background-color', 'black')
    } else if ($('#6').html() === 'O') {
      oWins()
      $('#6').css('background-color', 'black')
      $('#7').css('background-color', 'black')
      $('#8').css('background-color', 'black')
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#0').html() !== '' && $('#0').html() === $('#3').html() && $('#3').html() === $('#6').html()) {
    if ($('#0').html() === 'X') {
      xWins()
      $('#0').css('background-color', 'black')
      $('#3').css('background-color', 'black')
      $('#6').css('background-color', 'black')
    } else if ($('#0').html() === 'O') {
      oWins()
      $('#0').css('background-color', 'black')
      $('#3').css('background-color', 'black')
      $('#6').css('background-color', 'black')
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#1').html() !== '' && $('#1').html() === $('#4').html() && $('#4').html() === $('#7').html()) {
    if ($('#1').html() === 'X') {
      xWins()
      $('#1').css('background-color', 'black')
      $('#4').css('background-color', 'black')
      $('#7').css('background-color', 'black')
    } else if ($('#1').html() === 'O') {
      oWins()
      $('#1').css('background-color', 'black')
      $('#4').css('background-color', 'black')
      $('#7').css('background-color', 'black')
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#2').html() !== '' && $('#2').html() === $('#5').html() && $('#5').html() === $('#8').html()) {
    if ($('#2').html() === 'X') {
      xWins()
      $('#2').css('background-color', 'black')
      $('#5').css('background-color', 'black')
      $('#8').css('background-color', 'black')
    } else if ($('#2').html() === 'O') {
      oWins()
      $('#2').css('background-color', 'black')
      $('#5').css('background-color', 'black')
      $('#8').css('background-color', 'black')
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#0').html() !== '' && $('#0').html() === $('#4').html() && $('#4').html() === $('#8').html()) {
    if ($('#0').html() === 'X') {
      xWins()
      $('#0').css('background-color', 'black')
      $('#4').css('background-color', 'black')
      $('#8').css('background-color', 'black')
    } else if ($('#0').html() === 'O') {
      oWins()
      $('#0').css('background-color', 'black')
      $('#4').css('background-color', 'black')
      $('#8').css('background-color', 'black')
    } else {
      alert('Something went wrong!')
    }
  } else if ($('#2').html() !== '' && $('#2').html() === $('#4').html() && $('#4').html() === $('#6').html()) {
    if ($('#2').html() === 'X') {
      xWins()
      $('#2').css('background-color', 'black')
      $('#4').css('background-color', 'black')
      $('#6').css('background-color', 'black')
    } else if ($('#2').html() === 'O') {
      oWins()
      $('#2').css('background-color', 'black')
      $('#4').css('background-color', 'black')
      $('#6').css('background-color', 'black')
    } else {
      alert('Something went wrong!')
    }
  } else {
    if (
      $('#0').html() !== '' &&
      $('#1').html() !== '' &&
      $('#2').html() !== '' &&
      $('#3').html() !== '' &&
      $('#4').html() !== '' &&
      $('#5').html() !== '' &&
      $('#6').html() !== '' &&
      $('#7').html() !== '' &&
      $('#8').html() !== ''
    ) {
      $('#display-msgs').html(``)
      $('.game-reset').removeAttr('disabled')
      $('#0').css('background-color', 'black')
      $('#1').css('background-color', 'black')
      $('#2').css('background-color', 'black')
      $('#3').css('background-color', 'black')
      $('#4').css('background-color', 'black')
      $('#5').css('background-color', 'black')
      $('#6').css('background-color', 'black')
      $('#7').css('background-color', 'black')
      $('#8').css('background-color', 'black')
      $('#display-msgs').html(`It's a tie! Press "Start New Game" to play again!`)
    }
  }
}

// ----------------------------------------------------------------------------
// END OF GAME
// ----------------------------------------------------------------------------

const isGameOver = function () {
  if (counter === 10) {
    store.game.over = true
  } else {
    store.game.over = false
  }
  return isGameOver
}

// ----------------------------------------------------------------------------
// LOGIN AUTHORIZATION
// ----------------------------------------------------------------------------

// General Success Messages
const successMessage = function (displayText) {
  $('#auth-msgs').text(displayText)
  setTimeout(function () {
    $('#auth-msgs').text('')
  }, 2000)
  $('#auth-msgs').removeClass('failure')
  $('#auth-msgs').addClass('success')
}

const failureMessage = function (displayText) {
  $('#auth-msgs').text(displayText)
  setTimeout(function () {
    $('#auth-msgs').text('')
  }, 2000)
  $('#auth-msgs').removeClass('success')
  $('#auth-msgs').addClass('failure')
}

// Sign up
const onSignUpSuccess = function () {
  $('#sign-up').trigger('reset')
  successMessage('Sign up successful!')
}

const onSignUpFailure = function () {
  $('#sign-up').trigger('reset')
  failureMessage('Sign up failed.')
}

// Sign in
const onSignInSuccess = function (responseData) {
  successMessage('Sign in successful!')
  store.user = responseData.user
  // Disable: sign in, sign up. Enable: sign out, change pw
  $('.sign-in-toggle').attr('disabled', 'true')
  $('.sign-up-toggle').attr('disabled', 'true')
  $('.sign-out-toggle').removeAttr('disabled')
  $('.game-reset-toggle').removeAttr('disabled')
  $('.change-pw-toggle').removeAttr('disabled')
  $('.get-history-toggle').removeAttr('disabled')
  // Clear forms
  $('#sign-in').trigger('reset')
  // Begin game text displays under 'turn'
  $('#display-msgs').text('')
  $('#display-msgs').text('Click "Start New Game" to begin!')
  counter = 12
}

const onSignInFailure = function () {
  $('#sign-in').trigger('reset')
  failureMessage('Sign in failed. Please try again.')
}

// Change pw
const onChangePwSuccess = function () {
  successMessage('Password change successful. Please Login.')
  // Clear forms
  $('#change-pw').trigger('reset')
  // Disable: sign in, sign up. Enable: sign in, sign up
  $('.sign-out-toggle').attr('disabled', 'true')
  $('.change-pw-toggle').attr('disabled', 'true')
  $('.change-pw-toggle').attr('disabled', 'true')
  $('.get-history-toggle').attr('disabled', 'true')
  $('.game-reset').attr('disabled', 'true')
  $('.sign-out-toggle').attr('disabled', 'true')
  $('.game-reset-toggle').attr('disabled', 'true')
  $('.sign-in-toggle').removeAttr('disabled')
  $('.sign-up-toggle').removeAttr('disabled')
  // Clear game board upon sign out
  for (let i = 0; i <= 8; i++) {
    $('#' + i).html('').css('background-color', '#e8f4ff')
  }
  $('#display-msgs').text('')
  $('#display-msgs').text('Please sign-in to start a new game!')
  // Stop game board from functioning
  counter = 11
}

const onChangePwFailure = function () {
  $('#change-pw').trigger('reset')
  failureMessage('Password change unsuccesful. Please try again.')
}

// Sign out
const onSignOutSuccess = function (responseData) {
  successMessage('Sign out successful.')
  // Disable: change pw. Enable: sign in
  $('.change-pw-toggle').attr('disabled', 'true')
  $('.get-history-toggle').attr('disabled', 'true')
  $('.game-reset').attr('disabled', 'true')
  $('.sign-out-toggle').attr('disabled', 'true')
  $('.game-reset-toggle').attr('disabled', 'true')
  $('.sign-in-toggle').removeAttr('disabled')
  $('.sign-up-toggle').removeAttr('disabled')
  // Clear game board upon sign out
  for (let i = 0; i <= 8; i++) {
    $('#' + i).html('').css('background-color', '#e8f4ff')
  }
  $('#display-msgs').text('')
  $('#display-msgs').text('Please sign-in to start a new game!')
  // Stop game board from functioning
  counter = 11
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
