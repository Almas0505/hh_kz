const Resume = require('./models/Resume')
const WorkingHistory = require('./models/WorkingHistory')
const Education = require('./models/Education')
const ForeignLanguage = require('./models/ForeignLanguage')
const ResumeEmploymentType = require('./models/ResumeEmploymentType')
const EmploymentType = require('../employment-type/EmploymentType')
const Country = require('../region/Country')
const City = require('../region/city')
const {Op} = require('sequelize')
// const EmploymentType = require('../employment-type/EmploymentType')



const createResume = async (req, res)=>{

    
    const resume = await Resume.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      birthday: req.body.birthday,
      gender: req.body.gender,
      about: req.body.about,
      position: req.body.position,
      salary: req.body.salary,
      salary_type: req.body.salary_type,
      main_language: req.body.main_language,
      skills: req.body.skills,
      user_id: req.body.user_id,
      cityId: req.body.cityId, 
      citizenship: req.body.citizenship,
      

    })

    if(req.body.workingHistory && req.body.workingHistory.length > 0){
        req.body.workingHistory.forEach(async history => {
            await WorkingHistory.create({
                resumeId: resume.id,
                company_name: history.company_name,
                company_description: history.company_description,
                responsibilities: history.responsibilities,
                start_date: history.start_date,
                end_date: history.end_date,
            })
        });
    }

    if(req.body.education && req.body.education.length > 0){
        req.body.education.forEach(async edu => {
            await Education.create({
                resumeId: resume.id,
                level: edu.level,
                university_name: edu.university_name,
                faculty: edu.faculty,
                major: edu.major,
                end_date: edu.end_date,
            })
        });
    }

    if(req.body.foreignLanguages && req.body.foreignLanguages.length > 0){
        req.body.foreignLanguages.forEach(async ln => {
            await ForeignLanguage.create({
                resumeId: resume.id,
                level: ln.level,
                name: ln.name
            })
        });
    }
    if(req.body.employmentTypes && req.body.employmentTypes.length > 0){
        req.body.employmentTypes.forEach(async employmentTypeId => {
            await ResumeEmploymentType.create({
                resumeId: resume.id,
                employmentTypeId: employmentTypeId
            })
        });
    }




  res.status(200).send(resume)
}


const getMyResumes = async (req,res)=>{
   const resumes = await Resume.findAll({where:{user_id: req.user.id}})
   res.status(200).send(resumes)
}

const getResumes = async (req,res)=>{
    const resume = await Resume.findByPk(req.params.id, {
        include: [
            {
                model:WorkingHistory
            },
            {
                model:Education
            },
            {
                model:EmploymentType
            },
            {
                model:ForeignLanguage
            },
            {
                model:Country
            },
            {
                model:City
            }
        ]
    })
    res.status(200).send(resume)
 }
  

const deleteResume = async (req,res)=>{
     const data = await Resume.destroy({
        where: {
            id:req.params.id,

        }
     })

    res.status(200).end({message : "Deleted Succesfully"})
}

const editResume = async (req,res)=>{
     await Resume.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        birthday: req.body.birthday,
        gender: req.body.gender,
        about: req.body.about,
        position: req.body.position,
        salary: req.body.salary,
        salary_type: req.body.salary_type,
        main_language: req.body.main_language,
        skills: req.body.skills,
        user_id: req.body.user_id,
        cityId: req.body.cityId, 
        citizenship: req.body.citizenship,
     },
      {
        where:{
             id:req.body.id
        }
      })

     await WorkingHistory.destroy({
        where:{
            resumeId: req.body.id
        }
     })
     await Education.destroy({
        where:{
            resumeId: req.body.id
        }
     })
     await ResumeEmploymentType.destroy({
        where:{
            resumeId: req.body.id
        }
     })
     await ForeignLanguage.destroy({
        where:{
            resumeId: req.body.id
        }
     })

     const resume ={
        id:req.body.id
     }
     
     if(req.body.workingHistory && req.body.workingHistory.length > 0){
        req.body.workingHistory.forEach(async history => {
            await WorkingHistory.create({
                resumeId: resume.id,
                company_name: history.company_name,
                company_description: history.company_description,
                responsibilities: history.responsibilities,
                start_date: history.start_date,
                end_date: history.end_date,
            })
        });
    }

    if(req.body.education && req.body.education.length > 0){
        req.body.education.forEach(async edu => {
            await Education.create({
                resumeId: resume.id,
                level: edu.level,
                university_name: edu.university_name,
                faculty: edu.faculty,
                major: edu.major,
                end_date: edu.end_date,
            })
        });
    }

    if(req.body.foreignLanguages && req.body.foreignLanguages.length > 0){
        req.body.foreignLanguages.forEach(async ln => {
            await ForeignLanguage.create({
                resumeId: resume.id,
                level: ln.level,
                name: ln.name
            })
        });
    }
    if(req.body.employmentTypes && req.body.employmentTypes.length > 0){
        req.body.employmentTypes.forEach(async employmentTypeId => {
            await ResumeEmploymentType.create({
                resumeId: resume.id,
                employmentTypeId: employmentTypeId
            })
        });
    }

    res.status(200).send({message:"Updated Successfully"})

}


const searchResume = async (req,res) => {
        const options = {}
        const {q,salary_from,salary_to,salary_type,cityId,citizenship} = req.query
        if (q) {
          options[Op.or] = [
            { first_name: { [Op.iLike]: `%${q}%` } },
            { last_name: { [Op.iLike]: `%${q}%` } },
            { about: { [Op.iLike]: `%${q}%` } },
            { position: { [Op.iLike]: `%${q}%` } },
            { skills: { [Op.iLike]: `%${q}%` } },
          ];
        }
        if(citizenship){
          options.citizenship = citizenship
        }
        if(cityId){
          options.cityId = cityId
        }
        if(salary_from && !salary_to){
            options.salary = {[Op.gte]: salary_from}
        }else if(!salary_from && salary_to){
            options.salary = {[Op.lte]: salary_to}
        }else if(salary_from && salary_to){
            options.salary = {[Op.between]: [salary_from,salary_to]}
        }
        if(salary_type){
          options.salary_type = exprerienceId
        }
        const resumes = await Resume.findAll({
          where:options
        })
  
       res.status(200).send(resumes)
}


module.exports = {
    createResume,
    deleteResume,
    getResumes,
    getMyResumes,
    editResume,
    searchResume

}