import {Router} from 'express'
import { createProduct } from './handlers/product'


const router=Router()

//Rauting

router.get('/',(req,res)=>{
    const auth=true
    res.json('Desde Get')
})
router.post('/',createProduct)

router.put('/',(req,res)=>{
    const auth=true
    res.json('Desde put')
})

router.patch('/',(req,res)=>{
    const auth=true
    res.json('Desde Patch')
})

router.delete('/',(req,res)=>{
    const auth=true
    res.json('Desde Delete')
})

export default router