require('dotenv').config()
const client = require('twilio')(process.env.TWILIO_ID, process.env.TWILIO_AUTH_TOKEN)
const moment = require('moment')
const time = moment().format('LLL')

function sendMessage(req, res) {
  client.messages
    .create({
      body: `${req.body.message}. Sent at ${time}`,
      from: process.env.TWILIO_NUMBER,
      to: process.env.RECEIVER_NUMBER
    })
    .then(response => res.status(201).json(`Your message id: ${response.sid}`))
    .catch(err => console.log(err))
}

module.exports = {
  sendMessage
}