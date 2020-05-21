var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// tu código aquí
var LibroSchema =  Schema({
  isbn: String,
  titulo:String,
  autor: {
    nombre: String,
    paterno: String,
    materno: String
  }
});

module.exports = mongoose.model('Libro', LibroSchema);
