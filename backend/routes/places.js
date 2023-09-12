const express = require('express')
const PlaceController = require('../controllers/places')

const router = express.Router()

router.route('/')
    .get(PlaceController.index)
    .post(PlaceController.store)

router.route('/:id')
    .get(PlaceController.show)
    .put(PlaceController.update)
    .delete(PlaceController.destroy)

module.exports = router