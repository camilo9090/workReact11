

import express from "express";
import router from "./router";
import db from "./config/db";
import colors from "colors";
import SwaggerUi  from "swagger-ui-express";
import swaggerSpec,{swaggerUiOptions} from "./config/swagger";

//Conectar datos a base

export async function connectDB() {

    try {
        await db.authenticate()
        db.sync()
       /*  console.log(colors.magenta('conexion exitosa')); */
        
    } catch (error) {
       
        console.log(colors.red('error al conectar a la BD'))

    }

}

connectDB() 

//Instancia de express
export const server = express()

//Leer datos del formulario
server.use(express.json())

server.use('/api/products', router)

//Docs
server.use('/docs',SwaggerUi.serve,SwaggerUi.setup(swaggerSpec,swaggerUiOptions))



export default server