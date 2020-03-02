const mongoose = require('mongoose')

const weatherLogSchema = new mongoose.Schema({
  temperature: { type: Number },
  humidity: { type: Number }
}, {
  timestamps: true
})

module.exports = mongoose.model('WeatherLog', weatherLogSchema)

