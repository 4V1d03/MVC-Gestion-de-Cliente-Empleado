//Este archivo es como el main del proyecto

const express = require('express');// solicitud al servicio de express
const app = express(); //incialisa al modulo de express

app.set('view engine', 'ejs'); //motor de plantillas 

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));


//RUTAS
//metodo get es mas para recibir info o para consultar y no tanto para enviar info
// app.get('/',(req, res)=>{ //request, response
//     res.send('Este es un mensaje en la ruta');
// });

app.use('/',require('./router'));//para usar las rutas del archivo routers





//Ejecucion del Servidor
app.listen(5000, ()=>{
    console.log("Servidor local http://localhost:5000");
});
