var express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

const logger = require('./lib/logger')
const router = require('./config/router')

app.use(bodyParser.json())

app.use(logger)
app.use('/api', router)

app.listen(port, () => console.log(`App is running on port ${port}`))