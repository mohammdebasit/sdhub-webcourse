const profile = require("../modules/profile")
const student = require("../modules/Students")

const getAllStudents = async (req, res) => {
    const result = await student.findAll({include:{model:profile, attributes:['phone' , 'city']}})
    res.json(result)
}

const addStudent = async (req, res) => {
    const result = await student.create(
        {
            name: req.body.name,
            course: req.body.course,
            email: req.body.email
        })
    if (!result) res.status(404).json('errr')
    else res.status(200).json('added successfully')
}

const deleteStudent = async (req, res) => {
    const result = await student.destroy({ where: { name: req.body.name } })
    if (!result) res.status(404).json('student not found')
    else res.json({ message: 'deleted successfully' })
}

module.exports = { getAllStudents, addStudent, deleteStudent }