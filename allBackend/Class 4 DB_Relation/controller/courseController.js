const course = require("../modules/Course")

const getAllCourse = async (req, res) => {
    try {
        const result = await course.findAll()
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const addcourse = async (req, res) => {
    try {
        const search = await course.findOne({ where: { courseName: req.body.name } })
        if (search) return res.status(409).json({ message: 'Course already exist' })

        const result = await course.create(
            {
                courseName: req.body.name,
                duration: req.body.duration,
                totalSems: req.body.sems
            })
        res.status(201).json({ message: 'course added' })

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}


const deletecourse = async (req, res) => {
    try {
        const result = await course.destroy({ where: { courseName: req.body.name } })
        if (!result) res.status(404).json({ message: 'course not found' })
        else res.json({ message: 'deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getAllCourse, addcourse, deletecourse }