const router = require('express').Router()
const messages = require('../controllers/messages')

//POST to aviete:4000/api/message
router.route('/textMessage')
  .post(messages.sendText)

router.route('/whatsAppMessage')
  .post(messages.sendWhatsapp)

module.exports = router 