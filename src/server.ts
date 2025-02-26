

import express from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";

//Conectar datos a base

async function connectDB() {

    try {
        await db.authenticate()
        db.sync()
       /*  console.log(colors.magenta('conexion exitosa')); */
        
    } catch (error) {
        console.log(error);
        console.log(colors.red('error al conectar'));

    }

}

connectDB() 

//Instancia de express
export const server = express()

//Leer datos del formulario
server.use(express.json())


server.use('/api/products', router)

server.get('/api',(req,res)=>{
    res.json({msg:'desde api'})
})


export default server