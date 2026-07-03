const express = require('express')
const { getAllStudent, addStudent, deleteStudent } = require('../contorllers/studentController')
const router = express.Router()

router.get('/', getAllStudent)
router.post('/', addStudent)
router.delete('/:email', deleteStudent)


module.exports = router