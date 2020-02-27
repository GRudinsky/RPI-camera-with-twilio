require('dotenv').config()
const clientText = require('twilio')(process.env.TWILIO_ID, process.env.TWILIO_AUTH_TOKEN)
const clientWhatsapp = require('twilio')(process.env.TWILIO_ID_SANDBOX, process.env.TWILIO_AUTH_TOKEN_SANDBOX)
const moment = require('moment')
const time = moment().format('LLL')

function sendText(req, res) {
  clientText.messages
    .create({
      body: `${req.body.message}. Sent at ${time}`,
      from: process.env.TWILIO_NUMBER,
      to: process.env.RECEIVER_NUMBER
    })
    .then(response => res.status(201).json(`Your message id: ${response.sid}`))
    .catch(err => console.log(err))
}

function sendWhatsapp(req, res) {
  clientWhatsapp.messages
  .create({
    body: req.body.message,
    from: 'whatsapp:+14155238886',
    to: `whatsapp:${process.env.RECEIVER_NUMBER}`
  })
    .then(response => res.status(201).json(`Your message id: ${response.uri}`))
    .catch(err => console.log(err))
    .done()
}

module.exports = {
  sendText,
  sendWhatsapp
}