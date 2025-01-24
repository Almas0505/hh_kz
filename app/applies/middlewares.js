const Apply = require('./Apply')
const Resume = require('../resume/models/Resume')
const validateApply = (req, res, next) =>{
    let errors = {}

    if (!req.body.resumeId || req.body.resumeId.length === 0) {
        errors.resumeId = "Поле Резюме id обязательное";
    }
    
    if (!req.body.vacancyId || req.body.vacancyId.length === 0) {
        errors.vacancyId = "Поле вакансия id обязательное";
    }
 

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
    
}

const isAuthorOfApply  =async (req, res,next) =>{
    const id = req.params.id 
    console.log(id);
    

    const apply = await Apply.findByPk(id)
   
    
    
    if(!apply) res.status(400).send({message: "Apply doesn't exits"})
    
    else{
        const resumes = await Resume.findAll({
            where:{
                user_id: req.user.id
            }
        })

        const ids = resumes.map(item=>item.id)
        console.log(ids,id,ids.includes(id*1));
        
        if(ids.includes(id*1)){
            next()
        }else{
            res.status(403).send({message:"Access forbidden"})
        }
    }
}
   // else res.status(403).send({message:"Access forbidden"})
const isApplyExists = async (req,res,next)=>{
    const apply  = await Apply.findByPk(req.body.applyId)
    if(!apply) res.status(400).send({message: "Apply doesn't exits"})
    req.body.id = apply.vacancyId
    console.log(req.body.applyId);
    console.log(apply.vacancyId);
    next()
    
}

module.exports = {
    validateApply,
    isAuthorOfApply,
    isApplyExists
}