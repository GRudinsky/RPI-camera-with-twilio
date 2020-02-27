const router = require('express').Router()
const messages = require('../controllers/messages')

//post to aviete:4000/api/message
router.route('/message')
  .post(messages.sendMessage)

module.exports = router 