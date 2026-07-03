const student = require("../modules/Students")


//get all students from database
const getALlStudent = async (req, res) => {
    const results = await student.findAll()
    res.json(results)
}


//add new student in database
const addStudent = async (req, res) => {
    await student.create({ name: req.body.name, age: req.body.age, course: req.body.course })
    res.json("added successfully")
}


//delete a student from databasge
const deleteStudent = async (req, res) => {
    const std = await student.destroy({
        where: {
            id: req.params.id
        }
    })
    if (std != 0) {
        return res.status(200).json('deleted successfully')
    } else {
        return res.status(404).json('Student not found')
    }

}


//get student by id from database
const getStudentByID = async (req, res) => {
    const result = await student.findOne({ where: { id: req.params.id } })

    if (result) {
        return res.status(200).json(result)
    } else {
        return res.status(404).json({ message: 'student not found' })
    }
}


module.exports = { getALlStudent, addStudent, deleteStudent, getStudentByID }