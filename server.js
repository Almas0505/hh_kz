const express = require('express')
const logger = require('morgan')
const passport = require('passport');
const app = express()


app.use(logger('dev'))
app.use(express.urlencoded())
app.use(express.json())
app.use(passport.initialize())
app.use(express.static(__dirname + "/public"))

require('./app/auth/passport')


app.use(require('./app/auth/routes'))
app.use(require('./app/region/router'))
app.use(require('./app/skills/routes'))
app.use(require('./app/employment-type/routes'))
app.use(require('./app/languages/routes'))
app.use(require('./app/resume/routes'))
app.use(require('./app/vacancy/routes'))
app.use(require('./app/vacancy2/routes'))
app.use(require('./app/applies/routes'))




const port = 3000
app.listen(port,(req , res) => {
    console.log(`Server is working on port ${port}`);
    
})