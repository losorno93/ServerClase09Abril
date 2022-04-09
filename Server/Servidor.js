//importo el framework express
//const express = require('express')
import express from 'express'

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
        //estos son los servicios de mi API
        this.app.get('/api/v1/sabado', function (req, res) {
            res.send('Hola soy un Get')
          })

          this.app.get('/api/v1/sabado/:id', function (req, res) {
            res.send('Hola soy un Get')
          })

          this.app.post('/api/v1/sabado/', function (req, res) {
            res.send('Hola soy un POST')
          })

          this.app.put('/api/v1/sabado/', function (req, res) {
            res.send('Hola soy un PUT')
          })

          this.app.delete('/api/v1/sabado/', function (req, res) {
            res.send('Hola soy un DELETE')
          })



    }
}