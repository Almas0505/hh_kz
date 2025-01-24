const  SpecalizationType = require('./models/SpecalizationType')
const Specalization = require('./models/Specalization')
const getSpecalizations = async (req,res) =>{
     const specalizationTypes = await SpecalizationType.findAll({
        include:{
            model:Specalization
        }
     })
     res.status(200).send(specalizationTypes)
}

module.exports = {
    getSpecalizations
}