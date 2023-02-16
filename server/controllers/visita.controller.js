const { request, response} = require('express');
const { prisma } = require('../db/prisma');


/**
 * Método encargado de crear una reserva
 * @param {*} req 
 * @param {*} res 
 */
const crearVisita = async(req=request, res=response) =>{
    
    try {
        
        const {fecha, descripcion,formula, historiaId} = req.body;
        
        const visita = await prisma.visita.create({
            data:{
                fecha,
                descripcion,
                historiaId,
                formula
            }
        });

        res.status(201).json({
            ok:true,
            msg:'visita creada',
            visita
        });

    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }
}
/**
 * Método encargado de retornar las visitas de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getVisita = async(req=request, res=response)=>{
    try {

        const [numero, visita] = await Promise.all([
            prisma.visita.count(),
            prisma.visita.findMany({
                include:{
                    historiaId:true
                }
            })
        ])
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }
}

module.exports = {
    crearVisita,
    getVisita
}

