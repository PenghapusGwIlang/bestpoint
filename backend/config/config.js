require('dotenv').config()

module.exports.config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
}