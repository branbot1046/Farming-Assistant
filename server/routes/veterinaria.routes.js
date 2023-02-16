const {Router} = require('express');
const { getVeterinarias } = require('../controllers/veterinaria.controller');

const router= Router();


router.get('/',getVeterinarias);

module.exports = router;