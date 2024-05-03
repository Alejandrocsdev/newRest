// Importing required modules
const express = require('express')
const { engine } = require('express-handlebars')

// Creating an Express application
const app = express()

// Setting the port number
const port = 3000

// Setting up the Handlebars view engine
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

// Serving static files from the public directory
app.use(express.static('public'))

// app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Importing the router module from ./routes
const router = require('./routes')

// Using the router for all routes
app.use('/', router)

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/home`)
})
