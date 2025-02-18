import {Router} from 'express'


const router=Router()

//Rauting

router.get('/',(req,res)=>{
    const auth=true
    res.json('Desde Get')
})
router.post('/',(req,res)=>{
    const auth=true
    res.json('Desde Post')
})

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