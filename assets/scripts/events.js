'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSelection = function (event) {
  ui.insert(event.target.id)
  console.log(event.target.id)
}

module.exports = {
  onSelection
}
