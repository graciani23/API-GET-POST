const express = require('express')
const router = express.Router()
const controller = require('../controllers/filmesController')

router.get('/', controller.get)
router.get('/:genero', controller.getGenero)
router.get('/:diretor', controller.getDiretor)

router.post('/', controller.post)



module.exports = router