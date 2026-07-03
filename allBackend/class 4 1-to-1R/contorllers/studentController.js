const student = require("../modules/students")

const getAllStudent = async (req, res) => {
    try {
        const result = await student.findAll()
        if (result.length == 0) return res.status(404).json({ message: 'tabel is empty' })
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

const addStudent = async (req, res) => {
    try {
        const { name, email, clubId } = req.body
        const result = await student.findOne({ where: { email: email } })
        if (result) return res.status(404).json({ message: 'email is already active' })

        const user = await student.create({ name: name, email: email, clubId: clubId })
        res.status(201).json({ message: "student created successfully" })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { email } = req.params
        const user = await student.findOne({ where: { email: email } })
        if (!user) return res.status(404).json({ message: 'student not found' })

        const result = await user.destroy()
        res.status(201).json({ message: "student removed" })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { getAllStudent, addStudent, deleteStudent }