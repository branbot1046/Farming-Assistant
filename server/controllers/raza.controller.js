const {request, response} = require('express');
const {prisma} = require('../db/prisma');

const getRaza = async(req=request, res=response)=>{
    try {

        const raza = await prisma.raza.findMany();
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Erro, hable con el administrador'
        })
    }
}