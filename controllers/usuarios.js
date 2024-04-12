const { response, request } = require('express');



const usuariosGet = (req=request, res = response) => { 
    const query = req.query;
    
    res.json({ 
        msg:'get API- controlador',
        query
    });
}

const usuariosPost = (req, res = response) => { 
    const {nombre, edad} = req.body;
    
    res.json({ 
        msg:'post - API usuariosposts',
        nombre, edad
    });
}

const usuariosPut = (req, res = response) => { 
   const { id } = req.params;
   
    res.json({ 
        msg:'put API- usuariosPut',
        id
    });
}
const usuariosPatch = (req, res = response) => { 
    res.json({ 
        msg:'get API- controlador'

    });
}

const usuariosDelete= (req, res = response) => { 
    res.json({ 
        msg:'get API- controlador'
    });
}




module.exports = { 
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}