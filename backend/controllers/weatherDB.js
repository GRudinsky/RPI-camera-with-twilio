// const fs = require('fs')
const mongoose = require('mongoose')
const WeatherLog = require('../models/WeatherLog')
const sensor = require('node-dht-sensor')
const moment = require('moment')
const time = () => moment().format()
let interval = 4000
const dbURI = 'mongodb://aviete:27017/weatherDb'

mongoose.connect(dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => console.log('Mongo is connected')
)
function temperature() {
  sensor.read(11, 17, function (err, temperature, humidity) {
    let tempData = {
      temperature: temperature,
      humidity: humidity
      // time: time()
    }
    if (!err) {
      WeatherLog
        .create(tempData)
        .then(weatherLog => res.status(201).json({ message: `entry created, ${weatherLog.temperature}` }))
        .then(()=>console.log('created'))
        .catch(err=>console.log(err))
      // dataArray = [...dataArray, tempData]
      // console.log(tempData)
      // let data = JSON.stringify(dataArray)
      // fs.writeFileSync('data.json', data)
    }
  })
}

setInterval(() => {
  temperature()
}, interval)

module.exports = temperature