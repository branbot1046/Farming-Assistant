const {Router} = require('express');
const { getTipo } = require('../controllers/tipo.controller');


const router= Router();

router.get('/',getTipo );


module.exports = router;
