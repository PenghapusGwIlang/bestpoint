const express = require('express')
const app = express()
const cors = require('cors')
const { config } = require('./config/config')
require('dotenv').config()

const port = config.PORT || 4000

app.use(cors())

app.get('/', (req, res) => {
    res.send('init')
})

app.listen(port, () => {
    console.log('Example app running on http://localhost:3000')
})