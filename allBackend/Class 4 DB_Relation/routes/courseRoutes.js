const express = require('express')
const { getAllCourse, addcourse, deletecourse } = require('../controller/courseController')
const router = express.Router()


router.get('/', getAllCourse)
router.post('/', addcourse)
router.delete('/:id', deletecourse)

module.exports = router