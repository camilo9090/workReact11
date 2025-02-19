

import express from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";

//Conectar datos a base

async function connectDB() {

    try {
        await db.authenticate()
        db.sync()
        console.log(colors.magenta('conexion exitosa'));
        
    } catch (error) {
        console.log(error);
        console.log(colors.red('error al conectar'));

    }

}

connectDB() 
export const server = express()

server.use('/api/products', router)



export default server