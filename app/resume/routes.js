const express = require('express')
const router = express.Router()
const {createResume,getMyResumes,getResumes, deleteResume,editResume,searchResume} = require('./controller')
const {isAuth,isEmployee,isManager} = require('../auth/middlewares')
const passport = require('passport')
const {validateResume,isAuthorOfResume} = require('./middlewares')
require('../auth/passport')


router.post('/api/resume',passport.authenticate('jwt',{session:false}),isEmployee, validateResume ,createResume,)
router.get('/api/resume',passport.authenticate('jwt',{session:false}),isEmployee, getMyResumes)
router.get('/api/resume/search',searchResume)
router.get('/api/resume/:id',passport.authenticate('jwt',{session:false}), getResumes)
router.delete('/api/resume/:id',passport.authenticate('jwt',{session:false}), isAuthorOfResume,deleteResume)
router.put('/api/resume',passport.authenticate('jwt',{session:false}), isAuthorOfResume,editResume)

module.exports =router