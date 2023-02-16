const jwt = require('jsonwebtoken');

/**
 * Método encargado de crear un json web
 * @param {*} uid 
 * @param {*} password 
 * @returns 
 */
const generarJWT = (uid, password)=>{

    return new Promise((resolve, reject) =>{
        
        const payload = {uid,password};
        jwt.sign(payload,process.env.SECRET_JWT_SEED,{
            expiresIn:'4h',

        },(error,token)=>{
            if(error){
                console.log(error)
                reject(error);
            }else{
                resolve(token);
            }
        })
    })
}

module.exports = {generarJWT}