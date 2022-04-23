//importo el framework express
//const express = require('express')
import express from 'express'
import {rutas} from '../routes/rutas.js'

export class Servidor{
    constructor(){
        this.app = express()//atributo app guarda a express
        this.atenderPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`Servidor encendendido en ${process.env.PORT}`)
        })
    
    }
    atenderPeticiones(){
        //Llamado al archivo de rutas

        this.app.use('/', rutas)
        



    }
}