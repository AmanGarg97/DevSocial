const moongoose = require('mongoose')

const config = require('config')

const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await moongoose.connect(db)
        console.log('MongoDB connected ...')
    } catch(err) {
        console.log(err.message)
        process.exit(1)
    }
}

module.exports = connectDB