const express = require('express');
const cors =  require('cors');

class Server { 
    constructor() { 
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath= '/api/usuarios';
        
        // Llama al método middlewares para configurar los middleware
        this.middlewares();
        
        // Configura las rutas
        this.routes();
    }

    middlewares() { 
        //cors
        this.app.use( cors() );
        //Lectura y parseo del body
        this.app.use(express.json());
        //Directorio public
        this.app.use(express.static('public'));
    }

    routes() { 
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() { 
        this.app.listen(this.port, () => {
            console.log('Example app listening on port', this.port);
        });
    }
}

module.exports = Server;




