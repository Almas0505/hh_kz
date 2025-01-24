const EmploymentType = require('./EmploymentType')


const getEmploymentTypes = async (req , res) =>{
      const employmentType = await EmploymentType.findAll()
      res.status(200).send(employmentType)
}


module.exports = {
    getEmploymentTypes
}