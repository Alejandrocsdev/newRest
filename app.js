const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

const router = require('./routes')
app.use('/', router)

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
