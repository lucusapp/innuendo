
const express = require ('express');
const app = express ();

const Producto = require ('../models/productos');
const Controllers = require('../controllers/controllers')


const cheerio = require ('cheerio');
const fs = require ('fs');
const rp = require('request-promise');



app.post('/', (req,res)=>{
   const url= req.body.valor;
    console.log(url);
  
      // url='https://es.aliexpress.com/item/1300PA-Robot-Vacuum-Cleaner-Smart-2in1-for-Home-Dry-Wet-Water-Tank-Mop-brushless-motor-Mini/32827356149.html?spm=a2g01.12569797.ha9fdbb.4.2efbDJ6yDJ6y2V&pvid=211ebfc1-0fc4-4d13-91a8-6662d3f06eeb&gps-id=6180720&scm=1007.16233.119941.0&scm-url=1007.16233.119941.0&scm_id=1007.16233.119941.0'
        
        
        
        let options = {
            
            url:url,
            transform: (body)=> cheerio.load(body),
            
            headers: {
                'User-Agent': 'Request-Promise'
            },
            
            json: true // Automatically parses the JSON string in the response
        };
        //console.log(url);
        
    
    
    let imagenes = [];
    let propiedades = []
    
    
   rp(options)
    
    .then(function ($) {
        
        
        $('.detail-main').each(function(){
            let titulo = $(this).find('.product-name').html();
            let precio = $(this).find('#j-sku-price','.p-price').html();
            let image = $('.img-thumb-item','#j-detail-gallery-main').each(function(){
                img = $(this).find('img').attr('src').replace('_50x50.jpg','_250x250.jpg')
                imagenes.push(img)
            });
            
            let caracteristicas=[]
            
            
            $('.ui-box-body').each((i,li)=>{
                let propiedad=$(li)
                .find('.property-item')
                .text()
                .replace(/\s\s+/g, ';')
                .replace(/:;/g,':')
                .split(';')
                
                
                caracteristicas.push(propiedad)
                
            });
            
            
            for (var i = 0; i < imagenes.length; i++) {
                rp (imagenes[i]).pipe(fs.createWriteStream(`server/img/${i}.jpg`))
                
                
                
                
                producto = new Producto({
                    titulo,
                    precio,
                    // imagenes,
                    caracteristicas
                    
                })
                
                
            }
            
            //return res.json({producto})
            console.log(producto);
            
            
            
            app.get('/', Controllers.getScrapers);
            
            //app.post('/', Controllers.createScraper);
            
            
            
            
            app.post('/',(req,res)=>{
                const body= req.body.url;
                console.log(body);
                
                res.json({producto})
                
            })
            
            
            
            //  producto.save((err, productoDB) => {
                
                //         if (err) {
                    //            return res.status(400).json({
                        //                ok: false,
                        //                err
                        //            });
                        //        }
                        
                        //         res.json({
                            //            ok: true,
                            //            producto: productoDB
                            //        });
                            //   });
                            //});
                            app.get('/:id', Controllers.getScraper);
                            app.put('/:id', Controllers.editScraper);
                            app.delete('/:id', Controllers.deleteScraper)
                            
                            
                            
                            
                            // app.post('/', function(req,res){   
                                
                                // producto.save((err,productoDB)=>{
                                    //  if (err){
                                        //      return status(400).json({
                                            //          ok:false,
                                            //          err
                                            //         });
                                            //     }  
                                            
                                            //  return res.json ({
                                                //      ok:true,
                                                //      producto:productoDB
                                                //     });
                                                
                                                
                                            })   
                                            
                                        })
                                        
                                        
                                        .catch(function(err){
                                            ok:false,
                                            err
                                            
                                        })
                                    })

    
    

    // Crawling failed or Cheerio choked...
  
   

 

  // request({url,encoding:'binary'},(err,res,body)=>{
  //    if(!err && res.statusCode == 200) {
  //       let $ = cheerio.load(body)
  //                //console.log(body)

             
  
  //      })
 
  //       $('#j-sku-price','.product-price-area').each(function(){
  //        var precio= $(this).html()
  //       //console.log(precio);
  //      })
       
  //      $('.property-item','#j-product-desc').each(function(){
  //        var detalles= $('.property-item').text()
  //        var descrip= $('.propery-des').html()
  //       //console.log(detalles);
  //      })


  //   }

 
    // console.log(imagenes);
        

         
 

// }
module.exports = app;