require('dotenv').config()
var express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

const client = require('twilio')(process.env.TWILIO_ID, process.env.TWILIO_AUTH_TOKEN)
const moment = require('moment')

const time = moment().format('LLL')

app.use(bodyParser.json())

function message(req, res) {
  client.messages
    .create({
      body: `${req.body.message}. Sent at ${time}`,
      from: process.env.TWILIO_NUMBER,
      to: process.env.RECEIVER_NUMBER
    })
    // .then(message => response=message.sid)
    .then(response => res.status(201).json(`Your message id: ${response.sid}`))
    .catch(err => console.log(err))
}

//post to aviete:4000/message

app.post('/message', message)

app.listen(port, () => console.log(`App is running on port ${port}`))