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

/* sexto punto*/
//Pedir nombre  y el apellido del usuario
let nombre = (prompt ("Ingrese su nombre: "));
let apellido = (prompt ("Ingrese su apellido: "));

// mostrar mensaje
console.log("Bienvenido, " + nombre + apellido);

/* septimo punto*/
//pedir 3 notas de 0 a 5
let nota1 = Number (prompt("Ingrese de 0 a 5, la primera nota: "));
let nota2 = Number (prompt("Ingrese de 0 a 5, la segunda nota: "));
let nota3 = Number (prompt("Ingrese de 0 a 5, la tercera< nota: "));

//calcular el promedio 
let promedio= (nota1 + nota2 + nota3) / 3;

//mostrar promedio
console.log("El promedio de notas es:  " + promedio);

/*octavo punto*/
//pedir el numero de horas trabajadas en la semana y el precio que se paga por hora
let numeroHorasTrabajadas = Number (prompt("Ingrese el numero de horas trabajadas en la semana: "));
let precioHora = Number (prompt("Ingrese el precio de la hora trabajada: "));

//calcular el salario total
let salarioTotal = numeroHorasTrabajadas * precioHora; 

//mostrar salario 
console.log("El salario semanal es: " + salarioTotal);

/*noveno punto*/
let distanciaMillas = Number (prompt("Ingrese la distancia en millas: "));

let kilometros= distanciaMillas * 1.60934;

console.log("La distancia en kilometros es: " + kilometros);

/*decimo punto*/
let totalMinutos = Number (prompt("Ingrese el total de minutos trabajados : "));

let horas= totalMinutos / 60;
let minutos = totalMinutos % 60;

console.log( totalMinutos + " minutos equivalen a " + horas + " horas y " + minutos + " minutos")

/* punto once*/
let precioOriginal = Number (prompt("Ingrese el precio del producto : "));
let descuento = Number (prompt("Ingrese el porcenataje de descuento del producto : "));

// calcular el descuento
let vlrDecuento = precioOriginal * descuento / 100;

//calcular el precio final 
let precioFinal = precioOriginal - vlrDecuento;

console.log("El precio final del producto es: " + precioFinal);

/* punto doce*/
let  precioBase = Number (prompt("Ingrese el precio base del producto (SIN IVA) : "));

// calcular el iva 
let IVA = precioBase * 0.19;

// calcular el precio total 
let precioTotal = precioBase + IVA;

console.log("El IVA (19%): " + IVA);
console.log("El precio total con IVA es: " + precioTotal);

/*punto trece*/
let  capitalInicial = Number (prompt("Ingrese el capital inicial: "));
let  tasaInteres = Number (prompt("Ingrese la tasa de interes anual (%): "));
let  años = Number (prompt("Ingrese el numero de años: "));

// calcula la tasa del interes simple
let interes = capitalInicial * (tasaInteres/100) * años;

//calcular el capital final 
let capitalFinal = capitalInicial + interes;

console.log("Interés generado: $" + interes);
console.log("Capital final después de " + años + " años: $" + capitalFinal);

/*punto catorce*/
let base = Number(prompt("Ingresa la base del triángulo:"));
let altura = Number(prompt("Ingresa la altura del triángulo:"));

let area = base * altura / 2;

console.log("El área del triángulo es: " + area);







