const router = require('express').Router()
const prodcutController = require('../controllers/productController.js')

router.get('/', prodcutController.getAllProducts);

router.get('/:id', prodcutController.getEspecificProduct)

router.post('/', prodcutController.createProduct)

router.put('/:id', prodcutController.updateProduct)

router.delete('/:id', prodcutController.deleteProduct)


module.exports = router