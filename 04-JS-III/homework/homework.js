// No cambies los nombres de la1s funciones.

function devolverPrimerElemento(array) {

  return array[0];
  
}

function devolverUltimoElemento(array) {
  return array[array.length -1];
}

function obtenerLargoDelArray(array) {
  return array.length;
}

function incrementarPorUno(array) {
  for(var i = 0 ; i < array.length ; i++) {
    array[i]= array[i] + 1
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  for (var i = 0 ; i < array.length ; i++) {
    if(array[i] === elemento)
    return true;
  }
  return false;
}

function agregarNumeros(numeros) {
  var suma=0
  for (var i = 0 ; i < numeros.length ; i++) {
    suma= suma + numeros[i];
  }
return suma;
}

function promedioResultadosTest(resultadosTest) {
  var suma=0
  for (var i = 0 ; i < resultadosTest.length ; i++) {
    suma= suma + resultadosTest[i];
  }
  return (suma/resultadosTest.length);

}

function numeroMasGrande(numeros) {
  var max=0
  for (var i = 0 ; i < numeros.length ; i++){
    if(max < numeros[i])
    max = numeros[i]
  }
  return max;
}

function multiplicarArgumentos() {
  var mul = 1;
  if(arguments.length < 1) return 0;
  else 
    if (arguments.length === 1) return arguments[0]
    else
      for (var i = 0 ; i < arguments.length ; i++) {
        mul = mul * arguments[i]}
return mul;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};