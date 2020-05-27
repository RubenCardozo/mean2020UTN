var express = require('express');
var router = express.Router();
var productsCtrl = require("../controllers/products.ctrl")

router.get('/', productsCtrl.getAll);

router.get('/:id', productsCtrl.getById);

router.post('/', productsCtrl.save);

router.delete('/:id', productsCtrl.delete);

router.put('/:id', productsCtrl.update);

module.exports = router;