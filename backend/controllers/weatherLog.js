const fs = require('fs')
const sensor = require('node-dht-sensor')
const moment = require('moment')
const time = () => moment().format()
let interval = 4000
let dataArray = []
let id = 0

function weatherLog() {
  sensor.read(11, 17, function (err, temperature, humidity) {
    let tempData = {
      id: id,
      temperature: temperature,
      humidity: humidity,
      time: time()
    }
    if (!err) {
      dataArray = [...dataArray, tempData]
      console.log(tempData)
      let data = JSON.stringify(dataArray)
      fs.writeFileSync('./data.json', data)
      id = id + 1
    }
  })
}

setInterval(() => {
  weatherLog()
}, interval)

module.exports = weatherLog