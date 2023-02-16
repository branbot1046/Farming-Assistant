const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const { dbConnect } = require('../db/prisma');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT || 8080;
        this.conectarDB();
        this.middlewares();
        this.path = {
<<<<<<< HEAD
=======
            users:"/api/users",
>>>>>>> 741e0fcb90086b8822e1e2ceb0094e935e04c526
            auth:"/api/auth",
            mascotas:"/api/mascotas",
            historia:"/api/historia",
            tipo:"/api/tipoMascota",
            veterinarias:"/api/veterinaria"
        }
        this.routes();
    
    }
    
    /**
     * Método encargado de gestionar las rutas de la rest API
     */
    routes(){
<<<<<<< HEAD
        this.app.use(this.path.auth , require('../routes/auth.routes'));
=======

        this.app.use(this.path.veterinarias, require('../routes/veterinaria.routes'));
        this.app.use(this.path.auth , require('../routes/auth.routes'));
        this.app.use(this.path.users, require('../routes/users.routes'));
>>>>>>> 741e0fcb90086b8822e1e2ceb0094e935e04c526
        this.app.use(this.path.mascotas, require('../routes/mascotas.routes'));
        this.app.use(this.path.historia, require('../routes/historia.routes'));
        this.app.use(this.path.tipo, require('../routes/tipo.routes'));
    }

    middlewares(){
        
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    /**
     * Método encargado de iniciar el servidor
     */
    start(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor ejecutandose en el puerto http://localhost:${this.port}`)
        })
    }

    async conectarDB(){
        await dbConnect();
    }
}

module.exports = Server;