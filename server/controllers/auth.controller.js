const bcryptjs = require('bcryptjs');

const { generarJWT } = require('../helpers/jwt');
const { prisma } = require('../db/prisma');


/**
 * Método encargado de hacer login 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const loginUsuario = async(req=request, res=response)=>{
    
    const { email, password } = req.body;

    try {

        const usuario = await prisma.usuario.findUnique({
            where:{
                email
            }
        })

        if(!usuario) {
            return res.status(400).json({
                ok: false,
                msg:'El correo no existe'
            })
        }

        const validPassword = bcryptjs.compareSync( JSON.stringify(password) , usuario.password);
        
        if(! validPassword){

            return res.status(400).json({
                ok: false,
                msg:'La contraseña es inválida'
            });
        }

        const token = await generarJWT(usuario.id, usuario.nombre);

        return res.status(201).json({
            ok:true,
            uid:usuario.id,
            name:usuario.nombre,
            email:usuario.email,
            token
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:' Error, hable con el administrador'
        })
        
    }


}



module.exports = {
    loginUsuario
}