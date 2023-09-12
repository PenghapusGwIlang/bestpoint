const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const { config } = require('./config/config')

const port = config.PORT || 4000

app.use(cors())

app.get('/', (req, res) => {
    res.send('init')
})

mongoose.connect(config.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log('Connected to MongoDB and Example app running on http://localhost:3000')
        })
    })
    .catch((err) => console.log(err))