//controlador se encargada: 
//1.Recibir las peticiones 
//2.Ejecutar logica de negocio
//3.Llamar a la capa de servicios
//4.Enviar las respuestas al cliente

export class ControladorHabitacion {

    constructor(){}

    buscarTodas(request,response){

        let datos=[{nombre:"juan",edad:32},{nombre:"sara",edad:31}]//borrar despues
        try {

            response.status(200).json({
                mensaje:"Exito buscando los datos",
                data:datos,
                estado:true
            })

        }catch(error){
            response.status(400).json({
            mensaje:"Error buscando los datos"+error,
            data:[],
            estado:false
        })
        }
    }

    buscarPorId(request,response){
        let datos=[{nombre:"juan",edad:32}]//borrar despues
        let id=request.params.id
        console.log(id)
        try {

            response.status(200).json({
                mensaje:"Exito buscando los datos"+id,
                data:datos,
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos"+error,
                data:[],
                estado:false
            })
        }
            
        
    }

    registrar(request,response){}

    editar(request,response){}

    eliminar(request,response){}

}