const express = require('express');
const router = express.Router();

const conexion = require('./database/db'); //trae la conexion para las rutas

//ruta para index de cliente
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

router.get('/ver/:id', (req, res)=>{

    const codigo = req.params.id; 
    conexion.query('select * from clientes where codigo = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('cliente/ver', {clientes:resultado[0]});
        }
    })
});





//////////////////////////////////////////////////////////////




//ruta para index de empleado
router.get('/Empleado', (req, res)=>{

    conexion.query("select * from empleados",(error, resultado)=>{
        if (error) {
            console.log(error)
            return
        }
        else{

            res.render('empleado/index', {empleados:resultado});
        }
    })
});

router.get('/crear2', (req, res)=>{

    res.render('empleado/crear');
});

router.post('/save2', metodos.save2);

router.get('/editar2/:id', (req, res)=>{

    const codigo = req.params.id; 
    conexion.query('select * from empleados where codigo = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('empleado/editar', {empleados:resultado[0]}); 
        }
    })
});

router.post('/edit2', metodos.edit2);

router.get('/eliminar2/:id', (req, res)=>{

    const codigo = req.params.id; 
    conexion.query('select * from empleados where codigo = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('empleado/eliminar', {empleados:resultado[0]});
        }
    })
});

router.post('/delete2', metodos.delete2);

router.get('/ver2/:id', (req, res)=>{

    const codigo = req.params.id; 
    conexion.query('select * from empleados where codigo = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('empleado/ver', {empleados:resultado[0]});
        }
    })
});

//router.post('/veer2', metodos.delete2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Rutas Idiomas
router.get('/agregar/:id', (req, res)=>{

    const codigo = req.params.id; 
    conexion.query('select * from empleados where codigo = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('idioma/agregar', {idiomas:resultado[0]}); 
        }
    })
});

router.post('/agregarI', metodos.agregarI);

router.get('/Idioma', (req, res)=>{

    conexion.query("select * from idiomas",(error, resultado)=>{
        if (error) {
            console.log(error)
            return
        }
        else{

            res.render('idioma/index', {empleados:resultado});
        }
    })
});

router.get('/editar3/:id', (req, res)=>{

    const codigo = req.params.id; 
    conexion.query('select * from idiomas where codigoIdioma = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('idioma/editar', {idiomas:resultado[0]}); 
        }
    })
});

router.post('/edit3', metodos.edit3);

router.get('/eliminar3/:id', (req, res)=>{

    const codigo = req.params.id; 
    conexion.query('select * from idiomas where codigoIdioma = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('idioma/eliminar', {idiomas:resultado[0]});
        }
    })
});

router.post('/delete3', metodos.delete3);

router.get('/ver3/:id', (req, res)=>{

    const codigo = req.params.id; 
    conexion.query('select * from idiomas where codigoIdioma = ?', [codigo], (error, resultado)=>{
        
        if (error) {
            console.log(error)
            return
        }
        else{
            res.render('idioma/ver', {idiomas:resultado[0]});
        }
    })
});





























module.exports = router; //para poder enviar las rutas a otro archivo














