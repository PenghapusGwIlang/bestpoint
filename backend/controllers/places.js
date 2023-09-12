const Place = require('../models/place')

module.exports.index = async (req, res) => {
    const places = await Place.find({})
    res.json(places)
}

module.exports.store = async (req, res) => {
    const place = new Place(req.body)
    await place.save()
    res.json(place)
}

module.exports.show = async (req, res) => {
    const place = await Place.findById(req.params.id)
    res.json(place)
}

module.exports.update = async (req, res) => {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(place)
}

module.exports.destroy = async (req, res) => {
    const place = await Place.findByIdAndDelete(req.params.id)
    res.json(place)
}