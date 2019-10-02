'use strict'
const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.game-reset-toggle').on('click', events.onCreate)
  $('#0').on('click', events.onSelection)
  $('#1').on('click', events.onSelection)
  $('#2').on('click', events.onSelection)
  $('#3').on('click', events.onSelection)
  $('#4').on('click', events.onSelection)
  $('#5').on('click', events.onSelection)
  $('#6').on('click', events.onSelection)
  $('#7').on('click', events.onSelection)
  $('#8').on('click', events.onSelection)
  $('#get-history').on('click', events.onGameRetrieval)
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-pw').on('submit', events.onChangePw)
  $('#sign-out').on('submit', events.onSignOut)
  $('.game-reset').on('click', events.onCreate)
})

module.exports = {}
