const Role = require('./role')
const User = require('./User')
// const isAuth = (req ,res,next) => {
//     if(req.user)next()
// else res.status(403).send({message: 'Unauthorized'})
// }


const isEmployee =async (req ,res,next) => {
    if(req.user){
       const role = await Role.findByPk(req.user.roleId)
       if(role.name === "employee" )next()
       else res.status(403).send({message:'Access denied' })
    }
else res.status(403).send({message: 'Unauthorized'})
}

const isManager =async (req ,res,next) => {
    if(req.user){
       const role = await Role.findByPk(req.user.roleId)
       if(role.name === "manager" )next()
       else res.status(403).send({message:'Access denied' })
    }
else res.status(403).send({message: 'Unauthorized'})
}

const validateSignUp = async (req,res,next) =>{
    let errors = {}

    if(!req.body.email || req.body.email.length === 0){
        errors.email = "Поле Email объязателень" 
    }
    if(!req.body.full_name || req.body.full_name.length === 0){
        errors.full_name = "Поле full_name объязателень" 
    }
    if(!req.body.company_name || req.body.company_name.length === 0){
        errors.company_name = "Поле company_name объязателень" 
    }
    if(!req.body.password || req.body.password.length === 0){
        errors.password = "Поле password объязателень" 
    }
    if(req.body.password !== req.body.password2){
        errors.password2 = "Пароли не совподают" 
    }
    const user = await User.findOne({
        where:{
            email:req.body.email,
        }
    })
    
    if(user){
         errors.email = "Пользователь с таким именем уже зарегестрирован"
    }

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
        else next()

}

module.exports = {
    isEmployee,
    isManager,
    validateSignUp
}