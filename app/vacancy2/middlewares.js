const Vacancy = require('./models/Vacancy')

const validateVacancy = (req,res,next)=>{
        let errors = {}
    
        if (!req.body.name || req.body.name.length === 0) {
            errors.name = "Поле Название Вакансий обязательное";
        }
        
        if (!req.body.specalizationId || typeof(req.body.specalizationId) === 'number') {
            errors.specalizationId = "Поле Специализация обязательное";
        }
        
        if (!req.body.cityId || req.body.cityId.length === 0) {
            errors.cityId = "Поле где искать сотрудников обязательное";
        }
        
        if (!req.body.description || req.body.description.length === 0) {
            errors.description = "Поле Расскажите про ваканцию обязательное";
        }
        
        if (!req.body.employmentTypeId || typeof(req.body.employmentTypeId) === 'number') {
            errors.employmentTypeId = "Поле тип занятости обязательное";
        }
    
        if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
        else next()
        
    
}

const isAuthorOfVacancy = async (req,res,next)=>{
     
    const id = req.params.id || req.body.id
    if (!id) {
        return res.status(400).send({ message: "Vacancy ID is required" });
      }
            
        const vacancy = await Vacancy.findByPk(id)
        
        
        
        if(!vacancy) res.status(400).send({message: "Vacancy doesn't exits"})
        else if(vacancy && req.user.id === vacancy.user_id) next()
        else res.status(403).send({message:"Access forbidden"})
    
}

module.exports = {
    validateVacancy,
    isAuthorOfVacancy
}