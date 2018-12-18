

require('../scrape');

const express = require ('express');
const app = express ();

const Producto = require ('../models/productos');


app.get('/producto', function(req,res){
    imagenes
});

app.post('/producto', function(req,res){

    let body = req.body;

    let producto = new Producto({
        titulo: body.titulo,
     
    });


    producto.save((err, productoDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            producto: productoDB
        });
    });
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


module.exports = app;