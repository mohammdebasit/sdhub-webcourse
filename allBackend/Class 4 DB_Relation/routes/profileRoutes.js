const express = require('express')
const { getAllProfile, addProfile, deleteProfile } = require('../controller/profileController')
const router = express.Router()


router.get('/', getAllProfile)
router.post('/', addProfile)
router.delete('/', deleteProfile)

module.exports = router