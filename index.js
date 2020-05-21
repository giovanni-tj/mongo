var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://usuario1:vFdn0zPCyfW8NnvT@cluster0-hcg3d.mongodb.net/libros?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro(){
// tu código aquí
var lib=Libro({
  isbn: "4567226A",
  titulo:"Vuela a tu libertad",
  autor: {
    nombre: "Alfonso",
    paterno: "Lara",
    materno: "Castilla"
  }
});

lib.save(function(err,data){
  if (err) {
    console.log("------------------------ERROR --------------------------");
  }else {
    console.log("------------------------OK ---------------------------");
    console.log(data);
  }
});
}

function nuevosLibros() {

  var libros=[
    { isbn: "5661426B",titulo:"La Divina Comedia",autor: {nombre: "Dante", paterno: "Alighieri", materno: " " }},
    { isbn: "4534226C",titulo:"Frankenstein",autor: {nombre: "Mary", paterno: "W.", materno: "Shelley" }},
    { isbn: "4536226D",titulo:"La Fiebre",autor: {nombre: "Dee", paterno: "Shulman", materno: " " }},
    { isbn: "4569226E",titulo:"Cazadores de Sombras: Los origenes",autor: {nombre: "Cassandra", paterno: "Clare", materno: " " }},
    { isbn: "7567223F",titulo:"El Arte de la Guerra",autor: {nombre: "Sun", paterno: "Tzu", materno: " " }},
    { isbn: "4567228G",titulo:"El Perfume",autor: {nombre: "Patrick", paterno: "Süskind", materno: " " }},
    { isbn: "4567926H",titulo:"It",autor: {nombre: "Stephen", paterno: "King", materno: " " }},
    { isbn: "4567426I",titulo:"Steve Jobs",autor: {nombre: "Walter", paterno: "Isaacson", materno: " " }},
    { isbn: "4567256P",titulo:"La Razon de estar contigo",autor: {nombre: "W. Bruce", paterno: "Cameron", materno: " " }}
  ];


  Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function buscarByIsbn(isbn) {
  Libro.find({isbn:isbn},function(err,documentos){
    console.log(documentos);
  });
}

 function modificarTituloByIsbn(isbn,titulo, autor){
  Libro.findOneAndUpdate({isbn:isbn},
    {titulo:titulo},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
  //nuevoLibro();
  //nuevosLibros();
  //buscarByIsbn("4567256P");
  modificarTituloByIsbn("7567223F","La Guerra");
}

main();    // ejecutamos main
