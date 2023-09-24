const Place = require("../models/place")
const Review = require("../models/review")
const mongoose = require("mongoose")

module.exports.store = async (req, res) => {
    const { place_id } = req.params

    try {
        if (!mongoose.Types.ObjectId.isValid(place_id)) {
            return res.status(404).json({ error: 'Place not found' })
        }

        const review = new Review(req.body)
        const place = await Place.findById(place_id)
        place.reviews.push(review)
        await review.save()
        await place.save()
        res.status(200).json(review)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}