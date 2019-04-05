
const Producto = require ('../models/productos');


const scrapeControl = {}


scrapeControl.getScrapers = async (req,res)=>{ 
       res.json ({
            ok:true,
            producto
           });
           //console.log(producto);
        }

scrapeControl.createScraper = async(req,res)=>{

       // 1.requerimos el body y lo almacenamos en una variable

       body = req.body
       console.log('recibido seguro')
       
       // 2. Hacemos la llamada al modelo Producto creando una variable
       producto = new Producto({
              // asignamos a las variables del modelo los datos procedentes del body
              titulo: body.titulo,
              precio: body.precio,
              caracteristicas: body.caracteristicas
       })
       console.log(producto);
       // 3. Guardamos el producto en la base de datos de mongodb
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
       })

        
    
};
scrapeControl.getScraper = (req,res)=>{
    
}
scrapeControl.editScraper = (req,res)=>{
 
}
scrapeControl.deleteScraper = (req,res)=>{
    
}



module.exports = scrapeControl