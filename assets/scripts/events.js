'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// ---------------------------------------------------------------------------//
// Game engine

const onCreate = function() {
  api.create()
    .then(ui.onCreateSuccess)
}

const onSelection = function(event) {
  ui.insert()
  ui.isGameOver()
  api.update(event.target.id, ui.currentTurn, ui.isGameOver)
    .then(ui.onUpdateSuccess)
}

const onGameRetrieval = function (event) {
  event.preventDefault()
  console.log(`I'm trying to process your request. In onGameRetrieval!`)
  api.retrieve()
    // Testing out the ajax response
    .then(ui.onGameRetrievalSuccess) // no parenthesis after the onIndexSuccess or else it runs synch. It'll be invoked by event handler when it's ready.
    .catch(ui.onGameRetrievalFailure)
}

// ---------------------------------------------------------------------------//
// Sign-up, in, out & change pw functions to the server

const onSignUp = function(event) {
  event.preventDefault()
  console.log('Sign up is processing')
  const form = event.target // going to be whatever element (form object in our webpage) we were listening for!
  const formData = getFormFields(form)
  console.log(formData)
  api.signUp(formData) // the singular variant of index
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function(event) {
  event.preventDefault()
  const form = event.target // going to be whatever element (form object in our webpage) we were listening for!
  const formData = getFormFields(form)
  api.signIn(formData) // the singular variant of index
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePw = function(event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePw(formData) // the singular variant of index
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onSignOut = function(event) {
  event.preventDefault()
  api.signOut() // the singular variant of index
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onCreate,
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onSelection,
  onGameRetrieval
}
