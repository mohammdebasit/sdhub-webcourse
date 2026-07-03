const express = require('express')
const { getAllTeacher, addTeacher, deleteTeacher } = require('../contorllers/teacherController')
const router = express.Router()

router.get('/', getAllTeacher)
router.post('/', addTeacher)
router.delete('/:name', deleteTeacher)


module.exports = router