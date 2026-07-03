const teacher = require("../modules/teacher")

const getAllTeacher = async (req, res) => {
    try {
        const result = await teacher.findAll()
        if (result.length == 0) return res.status(404).json({ message: 'tabel is empty' })
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

const addTeacher = async (req, res) => {
    try {
        const { name, subject } = req.body
        const result = await teacher.findOne({ where: { name: name } })
        if (result) return res.status(404).json({ message: 'email is already active' })

        const user = await teacher.create({ name: name, subject: subject })
        res.status(201).json({ message: "student created successfully" })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteTeacher = async (req, res) => {
    try {
        const { name } = req.params
        const user = await teacher.findOne({ where: { name: name } })
        if (!user) return res.status(404).json({ message: 'student not found' })

        const result = await user.destroy()
        res.status(201).json({ message: "student removed" })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { getAllTeacher, addTeacher, deleteTeacher }