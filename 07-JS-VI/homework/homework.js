// Do not change any of the function names

function invocarCallback(cb) {
  cb();
}

function sumarArray(numeros, cb) {
  var suma=0;
  for(var i=0; i<numeros.length;i++){
    suma=suma+numeros[i];
  }
  cb(suma);
}

function forEach(array, cb) {
  for(var i=0; i<array.length;i++){
    cb(array[i])}
}

function map(array, cb) {
  var nuevo = array.map(elem=>{return cb(elem)})
  return nuevo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
