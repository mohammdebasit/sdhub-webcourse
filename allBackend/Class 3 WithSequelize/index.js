const express = require('express')
const { ConnectDB, sync } = require('./config/db')
const student = require('./modules/Students')
const { getALlStudent, addStudent, deleteStudent, getStudentByID } = require('./controller/studentController')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.get('/', getALlStudent)
app.post('/', addStudent)
app.delete('/:id', deleteStudent)
app.get('/:id', getStudentByID)



// ConnectDB()
// sync()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
