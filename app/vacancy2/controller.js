const Experience = require('./models/Experience')
const Vacancy = require('./models/Vacancy')
const Company = require('../auth/Company')
const City = require('../region/city')
const EmploymentType = require('../employment-type/EmploymentType')
const Specalization = require('../vacancy/models/Specalization')
const {Op} = require('sequelize')
const getExperiences = async(req , res) =>{
    const experiences = await Experience.findAll()
    res.status(200).send(experiences)
} 

const createVacancy = async (req,res)=>{
    

    const vacancy = await Vacancy.create({
        
            name: req.body.name,
            specalizationId:  req.body.specalizationId,
            cityId: req.body.cityId,
            description:  req.body.description,
            employmentTypeId: req.body.employmentTypeId,
            salary_from:  req.body.salary_from,
            salary_to:  req.body.salary_to,
            salary_type:  req.body.salary_type,
            address:  req.body.address,
            exprerienceId:  req.body.exprerienceId,
            skills:  req.body.skills,
            about_company:  req.body.about_company,
            user_id:req.user.id,
            companyId: req.user.companyId
          
    })
    res.status(200).send(vacancy)
    
}

const getMyVacancies = async (req,res) =>{
     const vacancies = await Vacancy.findAll({
        where:{
             companyId:req.user.companyId
        }
     })
     res.status(200).send(vacancies)
}

const getVacancy = async(req,res)=>{
    const vacancy  = await Vacancy.findByPk(req.params.id,{
        include:[{
            model:City
        },{
            model:EmploymentType,
            as:'employmentType'
        },{
            model:Company,
             as:'company'
        },{
            model:Experience,
            as:'experience'
        },{
            model:Specalization,
            as:'specalization' 
        }]
    })
    res.status(200).send(vacancy)
}

const deleteVacancy = async (req,res)=>{
        await Vacancy.destroy({
           where: {
               id:req.params.id,
           }
        })
   
       res.status(200).send({message : "Deleted Succesfully"})
   
}

const editVacancy = async (req,res)=>{
    await Vacancy.update(
        {
        name: req.body.name,
        specalizationId:  req.body.specalizationId,
        cityId: req.body.cityId,
        description:  req.body.description,
        employmentTypeId: req.body.employmentTypeId,
        salary_from:  req.body.salary_from,
        salary_to:  req.body.salary_to,
        salary_type:  req.body.salary_type,
        address:  req.body.address,
        exprerienceId:  req.body.exprerienceId,
        skills:  req.body.skills,
        about_company:  req.body.about_company,
        user_id:req.user.id,
        companyId: req.user.companyId
        },
        {
            where:{
                id:req.body.id
            }
        })

        res.status(200).send({message:"Edited Succesfully"})
}

const searchVacancy = async(req,res) =>{
     
      const options = {}
      const {q,specalizationId,cityId,employmentTypeId,salary,salary_type,exprerienceId} = req.query
      if (q) {
        options[Op.or] = [
          { name: { [Op.iLike]: `%${q}%` } },
          { description: { [Op.iLike]: `%${q}%` } },
          { about_company: { [Op.iLike]: `%${q}%` } },
          { skills: { [Op.iLike]: `%${q}%` } },
        ];
      }
      if(specalizationId){
        options.specalizationId = specalizationId
      }
      if(cityId){
        options.cityId = cityId
      }
      if(employmentTypeId){
        options.employmentTypeId = employmentTypeId
      }
      if(exprerienceId){
        options.exprerienceId = exprerienceId
      }
      if(salary_type){
        options.salary_type = exprerienceId
      }
      if(salary){
        options.salary_from = {[Op.lte]: salary}
        options.salary_to = {[Op.gte]: salary}
      }


      const vacancies = await Vacancy.findAll({
        where:options
      })

     res.status(200).send(vacancies)
}


module.exports = {
    getExperiences,
    createVacancy,
    getMyVacancies,
    getVacancy,
    deleteVacancy,
    editVacancy,
    searchVacancy
}