const {request, response} = require('express');
const {prisma} = require('../db/prisma');

const getTipo = async(req=request, res=response)=>{
    try {

        const tipo = await prisma.tipoMascota.findMany({
            include:{
                razas:true
            }
        });

        res.status(200).json({
            ok:true,
            tipo
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }
}

module.exports = {
    getTipo
}