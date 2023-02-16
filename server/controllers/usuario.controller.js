
const {request, response} = require('express');
const bcryptjs = require('bcryptjs');
const {prisma} = require('../db/prisma');

/**
 * Método encargado de crear un usuario
 * @param {*} req 
 * @param {*} res 
 */
const crearUsuario = async(req=request, res=response)=>{
    
    try {

<<<<<<< HEAD
        const {nombre, email, password,telefono, direccion, veterinariaId} = req.body;
        
=======
        const {nombre, email, password,telefono, direccion,veterinariaId} = req.body;
        
        const salt = bcryptjs.genSaltSync();
        const passwordCrypt = bcryptjs.hashSync(JSON.stringify(password),salt);

>>>>>>> 741e0fcb90086b8822e1e2ceb0094e935e04c526
        const usuario = await prisma.usuario.create({
            
            data:{
                nombre,
                email,
<<<<<<< HEAD
                password,
=======
                password:passwordCrypt,
>>>>>>> 741e0fcb90086b8822e1e2ceb0094e935e04c526
                telefono,
                direccion,
                veterinariaId
            }
<<<<<<< HEAD
=======
        });

        res.status(201).json({
            ok:false,
            msg:'Usuario creado',
            usuario
>>>>>>> 741e0fcb90086b8822e1e2ceb0094e935e04c526
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }
}

module.exports = {
    crearUsuario
}