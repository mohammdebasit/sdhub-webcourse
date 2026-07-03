const express = require('express')
const { addProfile, getAllProfile, deleteProfile } = require('../contorllers/profileController')
const router = express.Router()

router.get('/', getAllProfile)
router.post('/', addProfile)
router.delete('/:phone', deleteProfile)


module.exports = router