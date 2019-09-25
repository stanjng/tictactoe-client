'use strict'
const events = require('./events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#1').on('click', events.onSelection)
  $('#2').on('click', events.onSelection)
  $('#3').on('click', events.onSelection)
  $('#4').on('click', events.onSelection)
  $('#5').on('click', events.onSelection)
  $('#6').on('click', events.onSelection)
  $('#7').on('click', events.onSelection)
  $('#8').on('click', events.onSelection)
  $('#9').on('click', events.onSelection)
})

module.exports = {
}
