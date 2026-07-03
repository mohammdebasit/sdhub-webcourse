const express = require('express')
const { getAllclubs, addClub, deleteClub } = require('../contorllers/clubController')
const router = express.Router()

router.get('/', getAllclubs)
router.post('/', addClub)
router.delete('/:clubName', deleteClub)


module.exports = router