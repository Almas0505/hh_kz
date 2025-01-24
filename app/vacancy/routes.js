const express = require('express')
const router = express.Router()
const {getSpecalizations} = require('./controllers')

router.get('/api/specalizations',getSpecalizations)


module.exports =router