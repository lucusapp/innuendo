require('./config/config');




const express = require ('express');
const mongoose = require ('mongoose');
const app = express ();
const bodyParser = require ('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require ('./routes/productos'))

app.use(express.static(__dirname + '/public'))




mongoose.connect ('mongodb://gavialus:romimu1111@ds131784.mlab.com:31784/deniuater',{useNewUrlParser: true}, (err,res)=>{

    if (err) throw err;

    console.log('Conectado al servidor de la base de datos 27017')
    }
)

app.listen(process.env.PORT,()=>{
    console.log('escuchando en el puerto 3000')
});