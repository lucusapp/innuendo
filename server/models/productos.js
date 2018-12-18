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
    descripcion:{
        type: String,
        required: [false, 'La descripción es necesaria']
    },
    imagen:{
        type: String,
        required: false
    }

});


module.exports = mongoose.model('Producto', productoSchema);