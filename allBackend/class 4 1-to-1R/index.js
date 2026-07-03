const express = require('express')
const student = require('./modules/students')
const profile = require('./modules/profile')
const { connectDB, sync } = require('./config/db')
const studentRoutes = require('./routes/studentRoute')
const profileRoutes = require('./routes/profileRoutes')
const club = require('./modules/culb')
const clubRoutes = require('./routes/clubRoutes')
const { where } = require('sequelize')
const teacher = require('./modules/teacher')
const teacherRoutes = require('./routes/teacherRoutes')

const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// one -to- one
student.hasOne(profile, { foreignKey: 'studentId' })
profile.belongsTo(student, { foreignKey: 'studentId' })

//one -to- many
club.hasMany(student, { foreignKey: { name: 'clubId', allowNull: false } })
student.belongsTo(club, { foreignKey: { name: 'clubId', allowNull: false } })

teacher.belongsToMany(student, { through: 'student_teacher', foreignKey: 'teacherId', otherKey: 'studentId' })
student.belongsToMany(teacher, { through: 'student_teacher', foreignKey: 'studentId', otherKey: 'teacherId' })
// connectDB()
// sync()

app.use('/student', studentRoutes)
app.use('/profile', profileRoutes)
app.use('/club', clubRoutes)
app.use('/teacher', teacherRoutes)


//one to one
app.get('/studentde', async (req, res) => {
    const result = await student.findAll({ attributes: ['name', 'email'], include: { model: profile, attributes: ['city', 'phone'] } })
    res.send(result)
})

//one to many
app.get('/clubm', async (req, res) => {
    const result = await club.findAll({ where: { clubName: 'Gamers' }, attributes: ['clubName', 'desc'], include: { model: student, attributes: ['name', 'email'] } })
    res.send(result)
})

//many to many
app.post('/:studentId/:teacherId', async (req, res) => {
    const { studentId, teacherId } = req.params
    const exStudent = await student.findByPk(studentId)
    if (!exStudent) return res.json({ message: "student not found" })

    const exTeacher = await teacher.findByPk(teacherId)
    if (!exTeacher) return res.json({ message: "teacher not found" })

    await exStudent.addTeacher(exTeacher)
    res.json({ message: "added successfully" })
})

//many to many
app.get('techerStudent/:teacherId', async (req, res) => {
    const teacherId = req.params.teacherId
    const exTeacher = await teacher.findByPk(teacherId, { attributes: ["name", "subject"], include: { model: student, attributes: ["name", "email"], through: { attributes: [] } } })
    res.json(exTeacher)
})

//many to many
app.get('/studentTeacher/:studentId', async (req, res) => {
    const studentId = req.params.studentId
    const exStudent = await student.findByPk(studentId, { attributes: ["name", "email"], include: { model: teacher, attributes: ["name", "subject"] ,through: { attributes: [] }  } })
    res.json(exStudent)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
