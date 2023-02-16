const {Router} = require('express');
const { crearUsuario } = require('../controllers/usuario.controller');

const router = Router();

router.post('/',crearUsuario);

module.exports = router;