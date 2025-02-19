
import {Request,Response} from 'express'

export const createProduct = ((req:Request, res:Response) => {
    const auth = true
    res.json('post')
})