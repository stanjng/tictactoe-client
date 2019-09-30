'use strict'

const config = require('./config')
const store = require('./store.js')

const create = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ``
  })
}

const update = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cells': {
          'index': event.target.id,
          'value': store.game.cells
        },
        'over': store.game.over
      }
    }
  })
}

const retrieve = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `games?over=true`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const changePw = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePw,
  create,
  update,
  retrieve
}
