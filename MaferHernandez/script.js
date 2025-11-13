 /* primer punto*/
//Pedir el precio de 3 productos 
let productoUno = Number (prompt ("Ingrese el precio del producto 1"));
let productoDos = Number (prompt ("Ingrese el precio del producto 2"));
let productoTres= Number (prompt ("Ingrese el precio del producto 3"));

//calcular el total de los productos 
let totalAPagar = (productoUno + productoDos + productoTres); 

//mostrar el total a pagar 
console.log( "el total a pagar es: " + totalAPagar);

/* segundo punto*/
//pedir el ancho y el alto de una pared
let anchoPared = Number (prompt ("Ingrese el ancho de la pared: "));
let altoPared = Number (prompt ("Ingrese el alto de la pared: "));

//calcular el area de la pared
let areaPared= (anchoPared * altoPared);

//mostrar el area de la pared 
console.log("El area de la pared es: " + areaPared);

/*tercer punto*/
//pide el largo del ancho y el largo del protero
let largoPotrero = Number (prompt ("Ingrese el largo del potrero: "));
let anchoPotrero = Number (prompt ("Ingrese el ancho del potrero: "));

//calcular el perimetro
let perimetroPotrero = 2 * (largoPotrero + anchoPotrero);

//mostrar el perimetro del potrero
console.log("El perimetro del potrero es: " + perimetroPotrero);

/*cuarto punto*/
//Pide la temperatura en grados °F
let temperaturaFahrenheit = Number (prompt("Ingrese la temperatura en grados °F: "));

// convertir en grados °C 
let temperaturaeraturaCelsius = (temperaturaFahrenheit - 32) / 1.8;

//mostrar el resultado de la conversion
console.log("La temperatura en grados celsius es: " + temperaturaeraturaCelsius);

/*quinto punto*/
// Pide el año de nacimiento 
let añoNacimiento = Number (prompt ("Ingrese su año de nacimiento: "));

//calcular cuantos años tiene para el 2024 
let edad = añoNacimiento - 2024;

//mostrar la edad que tiene
console.log("Tienes" + edad + "años");

