const {Router} = require('express');
const { getTipo, registrarMascota, getMascotas } = require('../controllers/mascotas.controller');



const router= Router();

router.get('/',getTipo);
router.get('/listar',getMascotas)
router.post('/',registrarMascota);


module.exports = router;