const express = require('express')
const router = express.Router()
const {createApplies,getEmployeeApplies,deleteApplies,acceptEmployee,declineEmployee,getVacancyApplies} = require('./controller')
const {isEmployee, isManager} = require('../auth/middlewares')
const {validateApply,isAuthorOfApply,isApplyExists} = require('./middlewares')
const passport = require('passport')
const {isAuthorOfVacancy} = require('../vacancy2/middlewares')
require('../auth/passport')

router.post('/api/applies',passport.authenticate('jwt',{session:false}),isEmployee,validateApply,createApplies)
router.get('/api/applies/employee',passport.authenticate('jwt',{session:false}),isEmployee,getEmployeeApplies)
router.delete('/api/applies/:id',passport.authenticate('jwt',{session:false}),isEmployee,isAuthorOfApply,deleteApplies)
router.put('/api/applies/accept/employee',passport.authenticate('jwt',{session:false}),isManager,isApplyExists,isAuthorOfVacancy,acceptEmployee)
router.put('/api/applies/decline/employee',passport.authenticate('jwt',{session:false}),isManager,isApplyExists,isAuthorOfVacancy,declineEmployee)
router.get('/api/applies/vacancy/:id',passport.authenticate('jwt',{session:false}),isManager,isAuthorOfVacancy,getVacancyApplies)


module.exports =router