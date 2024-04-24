/*hacer un programa que calcule la suma de los N
los primeros numeros naturales, donde N es el numero limite ingresado */

//datos de entrada

// var suma = Number(prompt("digite cantidad de numeros "));
// var n = 0;
// var acum = 0;
// for(var n = 0; n<= suma; n++) {
//     acum += n;
    
// }
// document.write(`el resultado es ${acum}` );

//hacer un programa que pida el nombre de un estudiante y Nnotas, calcular el promedio
//de las nota y determinar si el estudiantes apruebao reprueba; aprueba  con un promedio de3

/*let nombre = ( prompt("ingrese el nombre"))
let numNotas = Number(prompt("digite el numero de notas"));
 let sumaNotas = 0;

 for(let num= 1; num <=numNotas;num++){
     let notas = Number(prompt("digite nota"));
    sumaNotas = sumaNotas + notas;

 }
 let promedio = sumaNotas/numNotas;
 if(promedio>=3){
     document.write(" el estudiante " + nombre+" gano " + promedio.toFixed(2));

 }else{
     document.write(" el estudiante "+ nombre+ " perdio " + promedio.toFixed(2));
 }*/



 /*ingrese varios numeros enteros y muestra la cantidad de numeros ingresados y la suma de los mismos
 .Realiceesta accion hasta que el usuario ingrese la palabra fin */

 /*let suma = 0;
 let cantidad = 0;
 let numero;

 while(true){
    numero = prompt("ingrese un mumero entero o escriba fin para terminar:");

    if(numero.toLocaleLowerCase()==="fin"){
        break;
    }

 if(!isNaN(numero)&& Number.isInteger(parseFloat(numero))){
    suma +=parseInt(numero);
    cantidad++;
 }else{
    alert("por favor ingrese un numero entero valido o FIN para terminar.")
 }

}
alert(`cantidad de numeros ingresados: ${cantidad} \nSuma de los numeros:${suma}`);*/

/*realice una tabla de multiplicar con cualquiera numero ingresado hasta 30*/

// let numero = prompt ("I ngrese el numero para generar la tabla de multiplicar");

//     if (!isNaN (numero)  && numero > 0 && numero <=30 ){
//         document.write(`Tabla de multiplicar de ${numero}:`);
//         for (let i =1; i<=10;i++){
//             document.write(` ${numero} * ${i} = ${numero *i}:`);
//         }
//     } else {
//         document.write("Inrese un numero entre 1 y 30")
//     } 

    /*cree una tabla de multiplicar de cualquiernumero ingresado de manera desendente */

    //  let numero = prompt("ingrese numero a multiplicar ") ;
    //  document.write(`tabla de multiplicar desendiente de ${numero}<br>`);
    //  for(let i = 10; i>=1; i--){
    //     document.write(`${numero}* ${i}= ${numero* i } <br>`);
    //  }

    /*cree un ciclo que cuente del 1 al 30 en intervalos el numero ingresado */

    // let numero = parseInt (prompt("ingrese numero a multiplicar"));
    // if(!isNaN (numero) && numero >0){
    //     for(let i =1; i<=30; i+=numero){
     //       document.write(`${i}<br>`);
    //     }               
    // }
    // else{
    //     document.write ("El nmero ingresado no es valido ");


    /*cree un ciclo que cuente del 1 al 30 en intervalos y el numer
    ingresado de manera regresiva */

//     let numero = parseInt (prompt("ingrese numero a multiplicar"));

// if(isNaN(numero) ){
//     alert("ingrese un numero valido")

// }
// else{
//     for(let i=30 ;i>0;i-=numero){
//         document.write(`${i}<br>`);
//     }
// }

// digite un numero (altura) y a partir de el cree una escalera de asteriscos
// o el caracter que desee ; con esa altura debera quedar como una piramide

/* var altura =Number(prompt("digite la altura de la piramide"));
for( var x = 1; x <= altura; x ++){
    for(var y = 1; y <= x; y ++){
        document.write("+")
    }
    //intruccion final
    document.write("<br>")
}

// ahora hacer lo mismo pero invertida

var altura = Number(prompt("digite el tamaño de la altura invertida"));
    for(var x= altura; x >= 1; x --){
        for(var y = 1; y<=x; y ++){
            document.write("+")

        }
        //instruccion final
        document.write("<br>")

    } */

/*10 cree un programa que permita registrar el numero de compras
que se venden cada dia. pedir al usuario cuantos productos va a comprar
y registrar el precio unitario, calcular el valor unitario de cada compra
y finalizar el dia calcular cuantas facturas se hicieron y el total general 
cliete #1
no. productos: 3
valor p1: 4500
valor p2: 2000
valor p3: 3500
total compra: 10000
cliente #2
no productos: 2
valor p1: 1500
valor p2: 2200
total compra: 3500
total ventas del dia:2
total general del dia: 13500*/

//declaracion de la variable
 /*let numeroCliente = 1;
let totalVentasDia = 0;
let totalGeneralDia = 0; 

//funcion para registrar compra de un cliente
 function registrarCompraCliente(){
    //obtener la cantidadde productos
    let cantidadProductos = parseInt(prompt(`cliente # ${numeroCliente}: Ingrese la cantidad de productos:`));

    //inicializar variable para el total de la compra
    let totalCompraCliente = 0;

    //registrar precio de cada producto
    for(let i = 1; i <= cantidadProductos; i ++){
        let precioProducto = parseInt(prompt(`cliente # ${numeroCliente}: Ingrese el precio ddel producto ${i}:`));
        totalCompraCliente += precioProducto;
        

    }

    //mostrar total de la compra al cliente
    console.log(`cliente # ${numeroCliente} total de la compra # ${totalCompraCliente}`);


    //actualizar totales diarios
    totalVentasDia ++;
    totalGeneralDia += totalCompraCliente;

    //incrementar numero de cliente
    numeroCliente ++;

   
}

//ciclo para registrar compras de varios clientes
while(true){
    registrarCompraCliente();

    //preguntar si dese registrar otra compra
    let continuar = prompt("desea registrar otra compra? (si/no):"). toLowerCase();
    if (continuar != "si"){
        break;
    }
}


//preguntar al profe josie no imprime

// se muestra el resumen del dia
document.write("\n\nResumen del dia:");
document.write(`numero de facturas: ${totalVentasDia}`);
document.write(`total general: ${totalGeneralDia}`); */

/*11 cree un programa que calcule el promedio de 3 notaspara 3 alumnos
el programa debe mostrar lo siguiente
nombre del alimno # luis santos
materia: matematica
nota1: 4.5
nota2: 2.4
nota3:3,5
promedio: 4
nombre del alumno 2 milena orozco
materia fisica
nota1: 4,5
materia2: 2,5
materia3: 4,2
promedio: 4.2*/

// funcion para calcular promedio
 /* function calcularPromedio(notas){
    let sumaNotas = 0;
    for(let nota of notas){
        sumaNotas += nota;

    }
    return sumaNotas / notas.length;
}

// definir funcio para mostrar resultados
/*function moastrarResultados(nombreAlumno , materia, notas, promedio){
    console.log(`nombre del alumno:** ${nombreAlumno}`);
    console.log(`materia:** ${materia}`);
    console.log(`nota1:** ${notas[0]}`)
    console.log(`nota2:** ${notas[1]}`)
    console.log(`nota3:** ${notas[2]}`)
    console.log(`promedio:** ${promedio}`);
    console.log("---------------------------------")

}

//ingresar datos de los alumnos
let alumno = [
    { nombre:"santos" , materia: "matematicas" , notas:[4.5,2.4,3.5]},
    { nombre:"milena orozco" , materia: "fisica" , notas:[4.5,2.5,4.2]}
];*/


//calcular y mostrar resultados para cada alumno
/* for(let alumno of alumno){
    let promedio = calcularPromedio(alumno.notas);
    moastrarResultados(alumno.nombre, alumno.materia, alumno.notas, promedio);
} 
let numeroAlumnos = parseInt(prompt("Ingrese el número de alumnos: "));

for (let i = 1; i <= numeroAlumnos; i++) {
  let nombreAlumno = prompt(`Ingrese el nombre del alumno ${i}: `);
  let nota1 = parseFloat(prompt(`Ingrese la nota 1 de ${nombreAlumno}: `));
  let nota2 = parseFloat(prompt(`Ingrese la nota 2 de ${nombreAlumno}: `));
  let nota3 = parseFloat(prompt(`Ingrese la nota 3 de ${nombreAlumno}: `));

  let promedio = (nota1 + nota2 + nota3) / 3;

  console.log(`\nAlumno: ${nombreAlumno}`);
  console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
  console.log(`Promedio: ${promedio}`);
}

console.log("\n¡Gracias por usar el programa!");  */

/*12. cree una tabla de numeros del 1 al 15 minimo en HTML. la salida se debe ver un cu */
var filas = Number(prompt("digite el toeal de filas de la tabla"));
var columnas = Number(prompt("digite el total de las tabla"));
var contar = 1
document.write("<table border=`1`>");
    for(var x = 1;x <= filas; x++){
    document.write("<tr>");
    for( var y = 1; y <= columnas; y ++){
        document.write(">td<");
        document.write(contar ++);
        document.write(">/td<");

    }
    document.write("</tr>");
} 
   document.write("</table>");


