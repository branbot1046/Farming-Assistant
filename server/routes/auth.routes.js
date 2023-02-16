const {Router} = require('express');

const { loginUsuario } = require('../controllers/auth.controller');

const router = Router();

router.post('/login',loginUsuario)

module.exports = router;
