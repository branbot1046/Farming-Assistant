const {request, response} = require('express');
const {prisma} = require('../db/prisma');

const getVeterinarias = async(req=request, res=response)=>{
    
    try {

        const [numero, veterinarias] = await Promise.all([
            prisma.veterinaria.count(),
            prisma.veterinaria.findMany()
        ]);

        res.status(200).json({
            numero,
            veterinarias
        });
        
        
    } catch (error) {
        
    }
}


module.exports = {
    getVeterinarias
}