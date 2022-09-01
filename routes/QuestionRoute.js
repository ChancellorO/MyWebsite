const express = require('express')
const questionCtrl = require('../controller/QuestionCtrl')

const router = express.Router()

router.get('/', questionCtrl.mainpage)

router.post('/', questionCtrl.AddQuestion)

router.get('/:id', questionCtrl.FindSpecificQuestion)

router.delete('/:id', questionCtrl.DeleteQuestion)

module.exports = router