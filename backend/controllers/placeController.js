const Place = require('../models/place')
const mongoose = require('mongoose')

module.exports.index = async (req, res) => {
    const places = await Place.find({}).sort({ createdAt: -1 })
    res.status(200).json(places)
}

module.exports.store = async (req, res) => {
    try {
        const place = await Place.create(req.body)
        res.status(200).json(place)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports.show = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Place not found' })
    }

    const place = await Place.findById(id).populate('reviews')

    if (!place) {
        res.status(404).json({ error: 'Place not found' })
    }
    
    res.status(200).json(place)
}

module.exports.update = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Place not found' })
    }
    
    const place = await Place.findByIdAndUpdate(id, req.body, { new: true })

    if (!place) {
        res.status(400).json({ error: 'Place not found' })
    }

    res.status(200).json(place)
}

module.exports.destroy = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Place not found' })
    }

    const place = await Place.findByIdAndDelete(id)

    if (!place) {
        res.status(400).json({ error: 'Place not found' })
    }
    
    res.status(200).json(place)
}