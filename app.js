const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

const resume = require('./routes/resume')

app.use(resume)

app.use((req, res) => {
  res.send('<h2>Page not found</h2>')
})

app.listen(1000)