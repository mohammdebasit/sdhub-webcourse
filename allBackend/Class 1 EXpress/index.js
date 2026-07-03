const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded())

const students = [{ id: 1, name: 'saber', age: 20 }]

app.get('/', (req, res) => {
    res.send(students)
})

app.post('/', (req, res) => {
    students.push({ id: students.length + 1, name: req.body.name, age: req.body.age })
    res.json('added succesfully')
})

app.delete('/:name', (req, res) => {
    const index = students.findIndex((e) => e.name.toLowerCase() == req.params.name.toLowerCase())
    students.splice(index, 1)
    res.json('deleted successfull')
})

app.get('/:id', (req, res) => {
    const student = students.find((e) => e.id == req.params.id)
    if (!student) {
        return res.status(404).json("student id not found");
    }
    res.json(student)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
