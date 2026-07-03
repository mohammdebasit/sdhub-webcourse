const express = require('express')
const { ConnectDB, sync } = require('./config/db')
const student = require('./modules/Students')
const studentRoute = require('./routes/studentRoutes')
// const course = require('./modules/Course')
// const courseRoute = require('./routes/courseRoutes')
const profile = require('./modules/profile')
const profileRoute = require('./routes/profileRoutes')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

student.hasOne(profile,{foreignKey:"studentId"})
profile.belongsTo(student,{foreignKey:"studentId"})

ConnectDB()
sync()
app.use('/student', studentRoute)
// app.use('/course', courseRoute)
app.use('/profile', profileRoute)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
