const {sendMail} = require('../utils/SendMail')
const jwt = require('jsonwebtoken');
const AuthCode = require('./AuthCode')
const User = require('./User')
const Role = require('./role')
const {jwtOptions} = require('./passport')
const Company = require('./Company')
const bcrypt = require('bcrypt');

const sendVerificationEmail = async (req, res) => {
   try {
      const code = "HH" + Date.now()

      // Создание записи в базе данных
      await AuthCode.create({
         email: req.body.email,
         code: code,
         valid_till: Date.now() + 120000
      })
      // Отправка email
      await sendMail(req.body.email, "Code authorization hh.kz", code)

      res.status(200).send('Email sent successfully')

   } catch (error) {
      console.error('Error sending verification email:', error)
      res.status(500).send('Internal Server Error')
   }
}

const verifyCode = async (req , res) => {
     console.log(req.body);
     const authCode = await AuthCode.findOne({
        where: { email: req.body.email },
        order: [['valid_till', 'DESC']],
      });
     if(!authCode){
        res.status(401).send({error: "code is invalid"})
     }else if(new Date(authCode.valid_till).getTime() < Date.now()){
        res.status(401).send({error: "code is invalid"})
     }else if(authCode.code !== req.body.code){
        res.status(401).send({error: "code is invalid"})
     }else{
        let user = await User.findOne({where:{email:req.body.email}})
        const role = await Role.findOne({where:{name:'employee'}})
        if(!user){
            
            user = await User.create({
                roleId: role.id,
                email:req.body.email
            })
        }
        

        const token = jwt.sign({
            id:user.id,
            email:user.email,
            full_name:user.full_name,
            phone:user.phone,
            role:{
                 id:role.id,
                 name:role.name
            }

        }, jwtOptions.secretOrKey);
        res.status(200).send(token)
     }
     
} 

const signUp = async (req , res) =>{
    
    const role = await Role.findOne({
      where:{
         name:'manager'
      }
    })

    const company = await Company.create({
      name:req.body.company_name,
      description:req.body.company_description,
      address:req.body.company_address,
      logo:'/company/' + req.file.filename
    })

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await User.create({
      email:req.body.email,
      password:hashedPassword,
      full_name:req.body.full_name,
      companyId: company.id,
      roleId:role.id
    })

    res.status(200).end()
    
}


const logIn = async (req,res) =>{
   if(!req.body.email || req.body.email.length === 0 ||
      !req.body.password || req.body.password.length === 0 ){
            res.status(401).send("Unauthorized")
   }else{

      const user = await User.findOne({
         where:{
            email:req.body.email
         }
       })

       if(!user) return res.status(401).send("User written email is not exists")
         
       const isMatch = await bcrypt.compare(req.body.password, user.password);
       if(isMatch){
         const role = await Role.findByPk(user.roleId)
         const token = jwt.sign({
            id:user.id,
            email:user.email,
            full_name:user.full_name,
            phone:user.phone,
            role:{
                 id:role.id,
                 name:role.name
            }

        }, jwtOptions.secretOrKey);
        
        res.status(200).send(token)


       }else{
         res.status(401).send("password Incorrect")
       }

   }
}


module.exports = {
   sendVerificationEmail,
   verifyCode,
   signUp,
   logIn
}
