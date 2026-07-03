const express = require('express')
const router = express.Router()

const { getAllStudents, addStudent, deleteStudent } = require("../controller/studentController");

router.get('/', getAllStudents)
router.post('/', addStudent)
router.delete('/', deleteStudent)

module.exports = router