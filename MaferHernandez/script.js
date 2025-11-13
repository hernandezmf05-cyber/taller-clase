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
