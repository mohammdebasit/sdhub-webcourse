const student = require("../modules/students")

const getAllStudent = async (req, res) => {
    const result = student.findAll()
    res.json(result)
}

const addStudent = async (req, res) => {
    await student.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.json('added successfully')
}


module.exports = { getAllStudent, addStudent }