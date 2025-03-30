const express = require('express');
const router = express.Router();

const conexion = require('./database/db'); //trae la conexion para las rutas

router.get('/Cliente', (req, res)=>{

    conexion.query("select * from clientes",(error, resultado)=>{
        if (error) {
            console.log(error)
            return
        }
        else{
            res.send(resultado);
        }
    })
});

router.get('/Cliente2', (req, res)=>{

    conexion.query("select * from clientes",(error, resultado)=>{
        if (error) {
            console.log(error)
            return
        }
        else{
            //res.send(resultado);
            //let hola = "hola y adios";
            res.render('cliente/index', {clientes:resultado}); //envia objeto del resultado de la consulta sql
        }
    })
});

//ruta para crear nuevos clientes y llenar el formulario
router.get('/crear', (req, res)=>{

    res.render('cliente/crear');
});

const metodos = require('./controllers/me'); //metodo que recupera las funciones del controlador

router.post('/save', metodos.save);

router.get('/editar/:id', (req, res)=>{

    const codigo = req.params.id; //recupera localmente el id del cliente wue se envia al precionar editar
    conexion.query('select * from clientes where codigo = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('cliente/editar', {clientes:resultado[0]}); //envia objeto del resultado de la consulta sql
        }
    })
});

router.post('/edit', metodos.edit);

router.get('/eliminar/:id', (req, res)=>{

    const codigo = req.params.id; //recupera localmente el id del cliente wue se envia al precionar editar
    conexion.query('select * from clientes where codigo = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('cliente/eliminar', {clientes:resultado[0]}); //envia objeto del resultado de la consulta sql
        }
    })
});

router.post('/delete', metodos.delete);
















router.get('/Empleado', (req, res)=>{
    res.send('Esta es la ruta de Empleados');
});

router.get('/Empleado2', (req, res)=>{
    res.render('empleado/index'); //renderiza el archivo index en esta ruta
});


module.exports = router; //para poder enviar las rutas a otro archivo














