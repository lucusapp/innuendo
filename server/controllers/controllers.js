
const Producto = require ('../models/productos');


const scrapeControl = {}


scrapeControl.getScrapers = async (req,res)=>{ 
       return res.json ({
            ok:true,
            producto
           });

// scrapeControl.createScraper = (req,res)=>{
//    console.log(req.body);
//     res.json('recibido')
   

//         let body = req.body;

//         let producto = new Producto({
//            titulo: body.titulo, 
//         });

//         console.log(producto);
   
   
//      producto.save((err, productoDB) => {
   
//             if (err) {
//                return res.status(400).json({
//                    ok: false,
//                    err
//                });
//            }
   
//             res.json({
//                ok: true,
//                producto: productoDB
//            });
//        })

        
    
// };
scrapeControl.getScraper = (req,res)=>{
    
}
scrapeControl.editScraper = (req,res)=>{

}
scrapeControl.deleteScraper = (req,res)=>{
    
}
}


module.exports = scrapeControl