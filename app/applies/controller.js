const Apply = require('./Apply')
const {NEW,INVITATION, DECLINED} = require('./utils')
const {sendMail} = require('../utils/SendMail')
const Vacancy = require('../vacancy2/models/Vacancy')
const Resume = require('../resume/models/Resume')
const User = require('../auth/User')
const Company = require('../auth/Company')
const {Op} = require('sequelize')

const createApplies = async(req,res)=>{
  
  const apply = Apply.create({
    resumeId:req.body.resumeId,
    vacancyId:req.body.vacancyId,
    status:NEW

  })
  res.status(200).send(apply)

  const resume = await Resume.findByPk(req.body.resumeId)
  const vacancy = await Vacancy.findByPk(req.body.vacancyId)
  const user = await User.findByPk(vacancy.user_id)
  console.log(req.body.userId); // Debug log to check the value

  sendMail(user.email, `Новый отклик на вакансию ${vacancy.name}
      Имя соискателя: ${resume.first_name}
      Фамилия соискателя: ${resume.last_name}
      Телефон соискателя: ${resume.phone}`)
  
}

const getEmployeeApplies  =async(req,res)=>{
     const resumes = await Resume.findAll({
        where:{
            user_id:req.user.id
        }
     })

     const ids = resumes.map(item => item.id)

     const applies =  await Apply.findAll({
           where:{
            resumeId: {[Op.in]:ids}
           },
           include:{
            model:Vacancy,
            as:'vacancy'
           }
     })
     res.status(200).send(applies)
}


const deleteApplies = async(req,res)=>{
        await Apply.destroy({
            where:{
                id:req.params.id
            }
        })

        res.status(200).end()
}

const acceptEmployee = async(req,res)=>{
    await Apply.update(
        {
           status:INVITATION
        },
        {
            where:{
                id:req.body.applyId
            }
    })
    const apply = await Apply.findByPk(req.body.applyId)
    const vacancy = await Vacancy.findByPk(apply.vacancyId)
    const resume = await Resume.findByPk(apply.resumeId)
     const user = await User.findByPk(resume.user_id)
     const company = await Company.findByPk(req.user.companyId)
     sendMail(user.email, `You was invited to this vacancy: ${vacancy.name}`, `
        Company  ${company.name}, invited you,  address: ${company.address}`)

    res.status(200).end()
}

const declineEmployee = async(req,res)=>{
    await Apply.update(
        {
           status:DECLINED
        },
        {
            where:{
                id:req.body.applyId
            }
    })
    const apply = await Apply.findByPk(req.body.applyId)
    const vacancy = await Vacancy.findByPk(apply.vacancyId)
    const resume = await Resume.findByPk(apply.resumeId)
    const user = await User.findByPk(resume.user_id)
    sendMail(user.email, `You was declined to this vacancy: ${vacancy.name}`)
       

    res.status(200).end()
}

const getVacancyApplies = async(req,res)=>{
    const options ={
        vacancyId:req.params.id
    }

    if(req.query.status && req.status === NEW || req.status === INVITATION || req.status === DECLINED){
         options.status = req.query.status
    }
      
    const applies = await Apply.findAll({
        where:options,
            include:{
                model:Resume,
                as:'resume'
        }
    })
    res.status(200).send(applies)
}


module.exports ={
    createApplies,
    getEmployeeApplies,
    deleteApplies,
    acceptEmployee,
    declineEmployee,
    getVacancyApplies
}