var express = require('express');
var router = express.Router();
const {register, login} = require('../controllers/userController')
const {checkout} = require('../controllers/productsController')
/* GET users listing. */
router.post('/register', register)
router.post('/login', login)
router.post('/transaction', checkout)

module.exports = router;
