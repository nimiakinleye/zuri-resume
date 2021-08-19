const express = require('express')
const path = require('path')

const route = express.Router()

route.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'))
  console.log('My name is Toluwanimi')
})

route.post('/register', (req, res, next) => {
  res.send(`<h1>Thanks for sending a message!</h1>
    <h4>Name:</h4>
    <p>${req.body.name}</p>
    <h4>Email:</h4>
    <p>${req.body.email}</p>
    <h4>Message:</h4>
    <p>${req.body.message}</p>
  `)
})

route.get('/register', (req, res, next) => {
  res.redirect('/')
})

module.exports = route