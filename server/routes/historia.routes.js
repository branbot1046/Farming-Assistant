const {Router} = require('express');
const { crearHistoria, getHistoria,getHistorias} = require('../controllers/historia.controller');



const router = Router();

router.get('/:id',getHistoria)
router.get('/',getHistorias);
router.post('/',crearHistoria);


module.exports= router;