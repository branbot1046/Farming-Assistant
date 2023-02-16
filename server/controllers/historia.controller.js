const {request, response} = require('express');
const {prisma} = require('../db/prisma');

/**
 * método encargado de crear una historia clinica
 * @param {*} req 
 * @param {*} res
 */
const crearHistoria = async(req=request, res=response) =>{

    try {

        const {mascotaId} = req.body;

        const historia = await prisma.historia.create({
            data:{
                mascotaId
            }
        });

        res.status(201).json({
            ok:true,
            msg:"Historia clínica creada",
            historia
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        });
    }

}

/**
 * Método encargado de obtener una historia en específica
 * @param {*} req 
 * @param {*} res 
 */
const getHistoria = async(req=request, res=response)=>{

    try {

        const {id} = req.params;
        
        const historia = await prisma.historia.findUnique({
            where:{
                mascotaId:Number(id)
            },
            include:{
                mascota:true
            }
        });

        res.status(200).json({
            ok:true,
            historia
        })

        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }

}


/**
 * Método encargado de listar todas las historias clínicas registradas en el sistema
 * @param {*} req 
 * @param {*} res 
 */
const getHistorias = async(req=request, res=response)=>{

    try {
        
        const [numero, historias ] = await Promise.all([
            
            prisma.historia.count(),
            prisma.historia.findMany({
                include:{
                    mascota:true
                }
            })
        ])


        res.status(200).json({
            ok:true,
            numero,
            historias
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:"Error, hable con el administrador"
        
        })
    }

}


module.exports = {
    crearHistoria,
    getHistoria,
    getHistorias
}