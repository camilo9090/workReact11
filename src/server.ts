

import express from "express";
import router from "./router";
import db from "./config/db";

//Conectar datos a base

async function connectDB() {

    try {
        await db.authenticate()
        db.sync()
        console.log('conexion exitosa');
        
    } catch (error) {
        console.log(error);
        console.log('error al conectar');

    }

}

connectDB() 
export const server = express()

server.use('/api/products', router)



export default server