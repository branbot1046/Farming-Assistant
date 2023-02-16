const {request, response} = require('express');
const {prisma} = require('../db/prisma');

/**
 * Obtener los tipos
 * @param {*} req 
 * @param {*} res 
 */
const getTipo = async(req=request, res=response) =>{

    try {

        const tipos = await prisma.tipoMascota.findMany();

        res.status(201).json({
            ok:true,
            tipos
        })
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }
}

/**
 * Método encargado de registrar una mascota
 * @param {*} req 
 * @param {*} res 
 */
const registrarMascota = async(req=request, res=response)=>{

    try {

        const {nombre, fechaNacimiento, genero, tipoId, usuarioId, razaId} = req.body;
        const mascota = await prisma.mascota.create({
            data:{
                nombre,
                fechaNacimiento:new Date(fechaNacimiento),
                genero,
                tipoId,
                razaId,
                usuarioId
            }
        });
        res.status(201).json({
            ok:true,
            msg:"Perro creado",
            mascota
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
 * Método encargado de obtener las mascotas registradas en el sistema
 * @param {*} req 
 * @param {*} res 
 */
const getMascotas = async(req=request, res=response) =>{

    try {

        const [numero, mascotas] = await Promise.all([
            prisma.mascota.count(),
            prisma.mascota.findMany({
                include:{
                    raza:true,
                    tipo:true
                }
            })
        ])

        res.status(200).json({
            ok:true,
            numero,
            mascotas       
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Error, hable con el administrador"
        })
    }
}

module.exports = {
    getTipo,
    registrarMascota,
    getMascotas
}