const{
    controllerAdd,
    controllerGet,
    controllerGetId,
    controllerUpdate,
    controllerDelete,
    controllerLogin
}= require('./petugas.controller');
const router = require('express').Router();
const {checkToken} = require("../../auth/token.validation")

router.post('/', controllerAdd);
router.get('/', controllerGet);
router.get('/id', controllerGetId);
router.patch('/', controllerUpdate);
router.delete('/', controllerDelete);
router.post('/login', controllerLogin);

module.exports= router