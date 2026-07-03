const profile = require("../modules/profile")
const student = require("../modules/students")

const getAllProfile = async (req, res) => {
    try {
        const result = await profile.findAll()
        if (result.length === 0) return res.status(404).json({ message: 'tabel is empty' })
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

const addProfile = async (req, res) => {
    try {
        const { phone, age, city, studentId } = req.body
        const result = await profile.findOne({ where: { phone, } })
        const studentCheck = await student.findOne({ where: { id: studentId } })
        if (!studentCheck) return res.status(404).json({ message: 'invalid studentId' })
        if (result) return res.status(400).json({ message: 'profile is already active' })

        const user = await profile.create({ phone, age, city, studentId })
        res.status(201).json({ message: "profile created successfully" })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteProfile = async (req, res) => {
    try {
        const { phone } = req.params
        const user = await profile.findOne({ where: { phone: phone } })
        if (!user) return res.status(404).json({ message: 'student not found' })

        const result = await user.destroy()
        res.status(200).json({ message: "profile removed" })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { getAllProfile, addProfile, deleteProfile }