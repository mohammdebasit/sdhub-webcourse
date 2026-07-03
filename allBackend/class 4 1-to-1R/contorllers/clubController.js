const club = require("../modules/culb")

const getAllclubs = async (req, res) => {
    try {
        const result = await club.findAll()
        if (result.length == 0) return res.status(404).json({ message: 'tabel is empty' })
        res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

const addClub = async (req, res) => {
    try {
        const { clubName, desc } = req.body
        const result = await club.findOne({ where: { clubName: clubName } })
        if (result) return res.status(404).json({ message: 'Club is already exists' })

        const user = await club.create({ clubName, desc })
        res.status(201).json({ message: "Club created successfully" })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteClub = async (req, res) => {
    try {
        const { clubName } = req.params
        const user = await club.findOne({ where: { clubName: clubName } })
        if (!user) return res.status(404).json({ message: 'student not found' })

        const result = await user.destroy()
        res.status(201).json({ message: "student removed" })
    }
    catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = { getAllclubs, addClub, deleteClub }