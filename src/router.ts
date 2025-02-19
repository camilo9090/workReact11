import { Router } from 'express'
import { createProduct } from './handlers/product'
import { body } from 'express-validator'


const router = Router()

//Rauting

router.get('/', (req, res) => {
    const auth = true
    res.json('Desde Get')
})
router.post('/',

    //validacion
    body('name')
        .notEmpty().withMessage('El nombre del Producto no debe estar vacio'),

    body('price').isNumeric().withMessage('El valor no es valido').notEmpty()
        .withMessage('El precio del Producto no debe estar vacio')
        .custom(value => value > 0).withMessage('Valor debe ser mayor a 0'),

    createProduct
)

router.put('/', (req, res) => {
    const auth = true
    res.json('Desde put')
})

router.patch('/', (req, res) => {
    const auth = true
    res.json('Desde Patch')
})

router.delete('/', (req, res) => {
    const auth = true
    res.json('Desde Delete')
})

export default router