require('./config/config');




const express = require ('express');
const app = express ();
const bodyParser = require ('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.get('/producto', function(req,res){
    res.json('enviado get')
});

app.post('/producto', function(req,res){

    let body = req.body;

    if (body.titulo === undefined){
        res.status(400).json({
            ok:false,
            message: 'el nombre es necesario'
        })

    } else {

        res.json({
            body
        })
    }
});

app.put('/producto/:id', function(req,res){

    let id = req.params.id
    res.json(
        id
    )
});

app.delete('/', function(req,res){
    res.json('Hello Word')
});

app.listen(process.env.PORT,()=>{
    console.log('escuchando en el puerto 3000')
});