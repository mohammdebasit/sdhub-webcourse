const express = require('express')
const { connectDB, sync } = require('./config/db')
const student = require('./modules/students')
const { getAllStudent, addStudent } = require('./controllers/studentController')
const cors = require('cors');
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
connectDB()
sync()



app.get('/', getAllStudent);
app.post('/', addStudent);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
