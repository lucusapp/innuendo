const mongoose = require ('mongoose');
let Schema = mongoose.Schema;




let productoSchema = new Schema({
    titulo:{
        type: String,
        required: [false, 'El título es necesario']
    },
    precio:{
        type: String,
        required: [false, 'El precio es requirido']
    },
    // preciodist:{
    //     type: String,
    //     required: [false, 'El precio es requirido']
    // },
    caracteristicas:{
        type: String,
        required: [false, 'La descripción es necesaria']
    },
    // imagenes:{
    //     type: String,
    //     required: false
    // }

});




module.exports = mongoose.model('Producto', productoSchema);