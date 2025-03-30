const conexion = require('../database/db'); //hac el llamado a la bd, para hacer el llamado a conexion

//funcion de cerar cliente
exports.save=(req,res)=>{ //funcion que recupera los datos para asignarlos a variables

    const nom =(req.body.nombre);//nombre de los input en el html
    const ape =(req.body.apellido);
    const eda =(req.body.edad);
    const tel =(req.body.telefono);
    const ciu =(req.body.ciudad);

    conexion.query('insert into clientes set ?', {nombre:nom, apellido:ape, edad:eda, telefono:tel, ciudad:ciu}, (error, resultado)=>{

        if (error) {
            console.log(error)
        }
        else{
            res.redirect('/cliente2')
        }

    });

};


//editar cliente
exports.edit = (req, res)=>{

    const codigo = (req.body.codigo);
    const nombre =(req.body.nombre);
    const apellido =(req.body.apellido);
    const edad =(req.body.edad);
    const telefono =(req.body.telefono);
    const ciudad =(req.body.ciudad);

    conexion.query('update clientes set ? where codigo =?',[{nombre:nombre, apellido:apellido, edad:edad, telefono:telefono, ciudad:ciudad}, codigo] ,(error, resultado)=>{
    
        if (error) {
            console.log(error)
        }
        else{
            res.redirect('/cliente2')
        }    
    });
};

//eliminar cliente
exports.delete = (req, res) => {
    const codigo = req.body.codigo;

    conexion.query('DELETE FROM clientes WHERE codigo = ?', [codigo], (error, resultado) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/cliente2');
        }
    });
};

//////////////////////////////////////////////////////////////////////

//crear de empleado
exports.save2=(req,res)=>{ 

    const nombre =(req.body.nombre);
    const apellido =(req.body.apellido);
    const fecha =(req.body.fecha);
    const sueldo =(req.body.sueldo);
    const telefono =(req.body.telefono);

    conexion.query('insert into empleados set ?', {nombre:nombre, apellido:apellido, fecha:fecha, sueldo:sueldo, telefono:telefono}, (error, resultado)=>{

        if (error) {
            console.log(error)
        }
        else{
            res.redirect('/Empleado')
        }

    });

};

exports.edit2 = (req, res)=>{

    const codigo = (req.body.codigo);
    const nombre =(req.body.nombre);
    const apellido =(req.body.apellido);
    const fecha =(req.body.fecha);
    const sueldo =(req.body.sueldo);
    const telefono =(req.body.telefono);

    conexion.query('update empleados set ? where codigo =?',[{nombre:nombre, apellido:apellido, fecha:fecha, sueldo:sueldo, telefono:telefono}, codigo] ,(error, resultado)=>{
    
        if (error) {
            console.log(error)
        }
        else{
            res.redirect('/Empleado')
        }    
    });
};

exports.delete2 = (req, res) => {
    const codigo = req.body.codigo;

    conexion.query('DELETE FROM empleados WHERE codigo = ?', [codigo], (error, resultado) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Empleado');
        }
    });
};

// exports.veer2 = (req, res) => {
//     const codigo = req.body.codigo;

//     conexion.query('select FROM empleados WHERE codigo = ?', [codigo], (error, resultado) => {
//         if (error) {
//             console.log(error);
//         } else {
//             res.redirect('/Empleado');
//         }
//     });
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//agregar Idioma a Empleado
exports.agregarI=(req,res)=>{ 

    const codigoIdioma =(req.body.codigoIdioma);
    const codigoEmp =(req.body.codigoEmp);
    const nombreIdioma =(req.body.nombreIdioma);
    const tiempo =(req.body.tiempo);

    conexion.query('insert into idiomas set ?', {codigoIdioma:codigoIdioma ,codigoEmp:codigoEmp, nombreIdioma:nombreIdioma, tiempo:tiempo}, (error, resultado)=>{

        if (error) {
            console.log(error)
        }
        else{
            res.redirect('/Idioma')
        }

    });

};

exports.edit3 = (req, res)=>{
    const codigoIdioma =(req.body.codigoIdioma);
    const codigoEmp =(req.body.codigoEmp);
    const nombreIdioma =(req.body.nombreIdioma);
    const tiempo =(req.body.tiempo);

    conexion.query('update idiomas set ? where codigoIdioma =?',[{codigoIdioma:codigoIdioma ,codigoEmp:codigoEmp, nombreIdioma:nombreIdioma, tiempo:tiempo}, codigoIdioma] ,(error, resultado)=>{
    
        if (error) {
            console.log(error)
        }
        else{
            res.redirect('/Idioma')
        }    
    });
};

exports.delete3 = (req, res) => {
    const codigoIdioma = req.body.codigoIdioma;

    conexion.query('DELETE FROM idiomas WHERE codigoIdioma = ?', [codigoIdioma], (error, resultado) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect('/Idioma');
        }
    });
};