// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x > y) {
    return x;}
  else{
    return y;}
}

function saludo(idioma) {
  if(idioma ==="aleman"){
    return("Guten Tag!")}
  else if(idioma ==="mandarin"){
    return("Ni Hao!")}
  else if(idioma ==="ingles"){
    return("Hello!")}
  else return("Hola!");
}

function esDiezOCinco(numero) {
  return(numero===10 || numero===5);
}

function estaEnRango(numero) {
  return(numero<50 && numero>20);
}

function esEntero(numero) {
  return(numero === Math.floor(numero));
}

function fizzBuzz(numero) {
  if((numero %3 ===0) && (numero%5 ===0))
    return "fizzbuzz";
  else
    if(numero %3 ===0)
    return "fizz"
    else
      if(numero%5 ===0)
      return "buzz"
        else 
          return numero;
}

function esPrimo(numero) {
  if(numero<2) return false;
    else{
      for(var i = 2; i < Math.floor(numero/2); i++){ //en este caso es numero divido 2 truncado para no hacer repeticiones de mas
        if (numero %i ===0)
          return false}
      }
    return true;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};