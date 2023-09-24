const express = require('express')
const ReviewController = require('../controllers/reviewController')

const router = express.Router({ mergeParams: true })

router.route('/')
    .post(ReviewController.store)

module.exports = router