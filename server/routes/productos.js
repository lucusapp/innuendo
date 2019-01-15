const express = require ('express');
const app = express ();

const Producto = require ('../models/productos');

const cheerio = require ('cheerio');
const fs = require ('fs');
const rp = require('request-promise');


let options = {
    uri: 'https://es.aliexpress.com/item/Support-Spanish-Xiaomi-Huami-Amazfit-Stratos-Pace-2-Smart-Watch-men-GPS-PPG-Heart-Rate/32852437830.html?spm=es_lc.10010108.1000013.1.e0c05f65OvuKwq&gps-id=pcDetailBottomMoreThisSeller&scm=1007.13339.90158.0&scm_id=1007.13339.90158.0&scm-url=1007.13339.90158.0&pvid=e19cf7e4-b98a-4d77-804f-096eb201b322',
    transform: function (body) {
        return cheerio.load(body);
    },
    headers: {
      'User-Agent': 'Request-Promise'
      },
        json: true // Automatically parses the JSON string in the response
    };



//     let producto = []

// rp(options )
//     .then(function ($) {
//     //   $('.img-thumb-item','#j-detail-gallery-main').each(function(){
//     //     img = $(this).find('img').attr('src').substring(147,0)
//     //     imagenes.push(img);
// //});


 
//    const precio = $('#j-sku-price','.product-price-area').each(function(){
//      let  precio= $(this).html();
           
//            producto.push(precio)
//             }
//         )

//     $('.product-name').each(function(){
//                 let titulo = $(this).html()

//                 producto.push(titulo)
    
//     })
    
//     console.log(producto);
 
//     $('.item-sku-image').each(function(){
//         let clases = $(this).html()
    
//      })
// });

// // app.post('/producto', function(req,res){

// //     let body = req.body;
   

// //     let producto = new Producto({
// //         titulo: body.titulo,
     
// //     });


// //     producto.save((err, productoDB) => {

// //         if (err) {
// //             return res.status(400).json({
// //                 ok: false,
// //                 err
// //             });
// //         }

// //         res.json({
// //             ok: true,
// //             producto: productoDB
// //         });
// //     });
// // });
// // app.put('/producto/:id', function(req,res){

// //     let id = req.params.id
// //     res.json(
// //         id
// //     )
// // });

// app.delete('/', function(req,res){
//     res.json('Hello Word')
// });


module.exports = app;