import { Router } from 'express'
import { createProduct, deleteProduct, getProduct, getProductById, updateAvailability, updateProduct } from './handlers/product'
import { body, param } from 'express-validator'
import { handlersInputErrors } from './middleware'


const router = Router()
/**
* @swagger
* components:
*   schemas:
*     Product:
*       type: object
*       properties:
*         id:  
*           type: integer
*           description: El ID del producto
*           example: 1
*         name:
*             type: string
*             description: El nombre del producto
*             example: Teclado Gamer
* 
*         price:
*             type: number
*             description: El precio del producto
*             example: 500
* 
*         availability:
*             type: boolean
*             description: La disponibilidad del producto
*             example: true

 * 
 * 
 */


//Rauting

/**
 * @swagger
 * /api/products:
 *       get:
 *         summary: obtener todos los productos
 *         tags: [Products]
 *         description: Retorna todos los productos
 *         responses:
 *             200:
 *                description: Successfull response
 *                content:
 *                   application/json:
 *                     schema:
 *                        type: array
 *                        items:
 *                          $ref: '#/components/schemas/Product'
 */
router.get('/', getProduct)
router.get('/:id',

    param('id').isInt().withMessage('El id debe ser un numero'),
    handlersInputErrors,

    getProductById)

router.post('/',

    //validacion

    body('name')
        .notEmpty().withMessage('El nombre del Producto no debe estar vacio'),

    body('price').isNumeric().withMessage('El valor no es valido').notEmpty()
        .withMessage('El precio del Producto no debe estar vacio')
        .custom(value => value > 0).withMessage('Valor debe ser mayor a 0'),
    handlersInputErrors,
    createProduct
)

router.put('/:id',

    param('id').isInt().withMessage('El id debe ser un numero'),
    body('name')
        .notEmpty().withMessage('El nombre del Producto no debe estar vacio'),

    body('price').isNumeric().withMessage('El valor no es valido').notEmpty()
        .withMessage('El precio del Producto no debe estar vacio')
        .custom(value => value > 0).withMessage('Valor debe ser mayor a 0'),
    body('availability').isBoolean().withMessage('El valor no es valido'),
    handlersInputErrors
    , updateProduct)

router.patch('/:id',

    param('id').isInt().withMessage('El id debe ser un numero'),
    handlersInputErrors,
    updateAvailability)

router.delete('/:id',
    param('id').isInt().withMessage('El id debe ser un numero'),
    handlersInputErrors,
    deleteProduct


)

export default router