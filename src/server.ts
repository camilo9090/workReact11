

import express from "express";

export const server =express()


//Rauting

server.get('/',(req,res)=>{
    const auth=true
    res.json('Desde Get')
})
server.post('/',(req,res)=>{
    const auth=true
    res.json('Desde Post')
})

server.put('/',(req,res)=>{
    const auth=true
    res.json('Desde put')
})

server.patch('/',(req,res)=>{
    const auth=true
    res.json('Desde Patch')
})

server.delete('/',(req,res)=>{
    const auth=true
    res.json('Desde Delete')
})


export default server