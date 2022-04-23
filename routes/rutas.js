import express from 'express'
//importo el controlador de habitaciones
import { ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
//creo un objeto de la clase controladorHabitacion
let contradorHabitacion= new ControladorHabitacion()

//utilizo el metodo router() de express
export let rutas=express.Router()

//esta es la lista de servicios que ofrece el api<s
rutas.get('/api/v1/sabado', contradorHabitacion.buscarTodas)
  

rutas.get('/api/v1/sabado/:id',  contradorHabitacion.buscarPorId)

  rutas.post('/api/v1/sabado/', function (req, res) {
    res.send('Hola soy un POST')
  })

  rutas.put('/api/v1/sabado/', function (req, res) {
    res.send('Hola soy un PUT')
  })

  rutas.delete('/api/v1/sabado/', function (req, res) {
    res.send('Hola soy un DELETE')
  })