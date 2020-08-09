/////////////////////////////////////////////////////// PREGUNTA  3.2   ////////////////////////////////////////////////////////

/*Realice un algoritmo para determinar el sueldo semanal de un trabajador con base en las horas trabajadas y el pago por hora, considerando
 que después de las 40 horas cada hora se considera como
excedente y se paga el doble. Construya el diagrama de flujo, el
pseudocódigo y el diagrama N/S.*/

//SOLUCIÓN
/*
let horasTrabajadas = +prompt("Ingresar Horas trabajadas");
let costoporHora = +prompt("Ingresar costo por Hora");

if (horasTrabajadas > 0 && horasTrabajadas <= 40) {
  let dato1 = horasTrabajadas * costoporHora;
  console.log(`el sueldo es: ${dato1}`);
} else {
  let dato2 = horasTrabajadas - 40;
  let dato3 = dato2 + dato2;
  let dato4 = dato3 + 40;
  let final = dato4 * costoporHora;
  console.log(`el sueldo es: ${final}`);
}*/

///////////////////////////////////////////////////////// PREGUNTA 3.3 ////////////////////////////////////////////////////////////

/*El 14 de febrero una persona desea comprarle un regalo al ser querido que más aprecia en ese momento, su dilema radica en qué regalo
puede hacerle, las alternativas que tiene son las siguientes:
Regalo           Costo
Tarjeta          $10.00 o menos
Chocolates       $11.00 a $10010000.00
Flores           $101.00 a $250.00
Anillo           Más de $251.00
Se requiere un diagrama de flujo con el algoritmo que ayude a determinar qué regalo se le puede comprar a ese ser tan especial por el
día del amor y la amistad.*/


//SOLUCIÓN
/*
let dinero = +prompt("Ingresar el monto para comprar");

if (dinero > 0 && dinero <=10) {
  console.log(`El regalo será una tarjeta`);
} else if   (dinero >= 11 && dinero <=100)   {
    console.log(`El regalo será Chocolates`);
  }else if   (dinero >= 101 && dinero <=250)   {
    console.log(`El regalo será Flores`);
  }else  {
    console.log(`El regalo será un Anillo`);
  }
     */


//////////////////////////////////////////////////////////////   PREGUNTA 3.4  ////////////////////////////////////////////////////////////
/*
El dueño de un estacionamiento requiere un diagrama de flujo con
el algoritmo que le permita determinar cuánto debe cobrar por el
uso del estacionamiento a sus clientes. Las tarifas que se tienen son
las siguientes:

Las dos primeras horas a $5.00 c/u.
Las siguientes tres a $4.00 c/u.
Las cinco siguientes a $3.00 c/u.
Después de diez horas el costo por cada una es de dos pesos.
*/

//SOLUCIÓN
/*
let horas = +prompt("Ingresar horas de estacionamiento");

if (horas > 0 && horas <=2) {
    horas2 = horas * 5
    console.log(`El costo del estacionamiento es: ${horas2} `);

} else if   (horas>=3 && horas <=5)   {
    cant=  horas - 2;
    horas3= cant * 4;
    horasTotal = horas3 + 10;
    console.log(`El costo del estacionamiento es: ${horasTotal} `);

  }else if  (horas>=6 && horas <=10) {
    cant2=  horas - 2;
    cant3=  cant2 - 3;
    cant4 = cant3 * 3;
    horasTotal2 = cant4 + 12 + 10
    console.log(`El costo del estacionamiento es: ${horasTotal2}`)

  }else  {
    cant2=  horas - 2;
    cant3=  cant2 - 3;
    cant4 = cant3 - 5;
    cant5 = cant4 * 2;
    horasTotal3 = cant5 + 15 + 12 + 10
    console.log(`El costo del estacionamiento es: ${horasTotal3}`)
  }

*/
//////////////////////////////////////////////////////////////  PREGUNTA  3.8  ////////////////////////////////////////////////////////////

/*Cierta empresa proporciona un bono mensual a sus trabajadores, el
cual puede ser por su antigüedad o bien por el monto de su sueldo
(el que sea mayor), de la siguiente forma:
Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga
20 % de su sueldo; cuando es de 5 años o más, 30 %. Ahora bien, el
bono por concepto de sueldo, si éste es menor a $1000, se da 25 %
de éste, cuando éste es mayor a $1000, pero menor o igual a $3500,
se otorga 15% de su sueldo, para más de $3500. 10%. Realice el
algoritmo correspondiente para calcular los dos tipos de bono, asignando el mayor, 
y represéntelo con un diagrama de flujo y pseudocódigo.*/

//SOLUCIÓN
/*
let antiguedad = +prompt("Ingresar antiguedads en años");
let sueldo = +prompt("Ingresar monto de sueldo");



if (antiguedad > 0 && antiguedad <=2) {
    caso0 =0;
    console.log(`el pago por antiguedad es: ${caso0}`);
} else if (antiguedad > 2 && antiguedad <5) {
    caso0 = sueldo * 0.20;  
    console.log(`el pago por antiguedad es: ${caso0}`);
} else  {
    caso0 = sueldo * 0.30;  
    console.log(`el pago por antiguedad es: ${caso0}`);
} 

 if (sueldo > 0 && sueldo <= 1000) {
    sueldo1 = 0; 
    console.log(`el pago por sueldo es: ${sueldo1}`);
} else if (sueldo > 0 && sueldo < 1000) {
    sueldo1 = sueldo * 0.25;  
    console.log(`el pago por sueldo es: ${sueldo1}`);
} else if (sueldo >= 1000 && sueldo <= 3500) {
    sueldo1 = sueldo * 0.15;  
    console.log(`el pago por sueldo es: ${sueldo1}`);
} else   {
    sueldo1 = sueldo * 0.15;  
    console.log(`el pago por sueldo es: ${sueldo1}`);
} 

if (caso0 > sueldo1 ){
    console.log(`El pago a recibir es: ${caso0}`);
} else {
    console.log(`El pago a recibir es: ${sueldo1}`);
}
   */


////////////////////////////////////////////////////////////// PREGUNTA  3.9  ////////////////////////////////////////////////////////////
/*
Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura amplia (A) y daños a terceros (B). Para el plan A, la cuota
base es de $1,200, y para el B, de $950. A ambos planes se les carga
10% del costo si la persona que conduce tiene por hábito beber alcohol, 5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia cardiaca o diabetes–, 
y si tiene más de 40 años, se le carga
20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre
el costo base. Realice diagrama de flujo y diagrama N/S que represente el algoritmo para determinar cuánto le cuesta a una persona
contratar una póliza
*/


//SOLUCIÓN


let plan = prompt("Ingresar si tiene cobertura amplia (A) y daños a terceros (B)");
let alcohol = prompt("Ingresar si bebe alcohol (SI / NO)");
let lentes = prompt("Ingresar si usa lentes (SI / NO)");
let enfermedad = +prompt("Ingresar si tiene enfermedad (deficiencia cardiaca o diabetes) (SI / NO)");
let edad = +prompt("Ingresar edad");


if (plan==="A" || plan==="a"){
    monto = 1200;
} else {
    monto = 950
}

if (alcohol === "SI" || alcohol === "si") {
        tAlcohol = monto * 0.10;
} else {
    tAlcohol = 0 ;
}

if (lentes === "SI" || lentes==="si") {
    tlentes = monto * 0.05;
} else {
tlentes = 0 ;
}

if (enfermedad === "SI" || enfermedad==="si") {
    tenfermedad = monto * 0.05;
} else {
tenfermedad = 0 ;
}

if (edad > 40 ) {
    tedad = monto * 0.20;
} else {
tedad = 0 ;
}

monto_total = monto + tAlcohol + tlentes + tenfermedad + tedad 
    
console.log(`  monto base ${monto} + alcohol ${tAlcohol} + lentes ${tlentes} + enfermedad ${tenfermedad}+  edad ${tedad} + monto_total ${monto_total} `);
 
 




////////////////////////////////////////////////////////////// PREGUNTA  3.11 //////////////////////////////////////////////////////////////


/*Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así
sucesivamente hasta los 5 años. Para los que tengan más de 5, el
bono será de $1000. Realice un algoritmo y represéntelo mediante
el diagrama de flujo, el pseudocódigo y diagrama N/S que permita
determinar el bono que recibirá un trabajador.*/



//SOLUCIÓN

/*
let antiguedad = +prompt("Ingresar los años de antiguedad");


if (antiguedad===1){
    monto = 100;   
    console.log(`El pago a recibir es: ${monto}`);
} else if (antiguedad===2) {
    monto = 200;
    console.log(`El pago a recibir es: ${monto}`);
} else if (antiguedad===3) {
    monto = 300;
    console.log(`El pago a recibir es: ${monto}`);
} else if (antiguedad===4) {
    monto = 400;
    console.log(`El pago a recibir es: ${monto}`);
} else if (antiguedad===5) {
    monto = 500;
    console.log(`El pago a recibir es: ${monto}`);
}else {
     monto = 1000;
     console.log(`El pago a recibir es: ${monto}`);
}
 */



//3.17
/*
Realice un algoritmo y represéntelo mediante el diagrama de flujo,
el pseudocódigo y el diagrama N/S que permitan determinar qué
paquete se puede comprar una persona con el dinero que recibirá
en diciembre, considerando lo siguiente:
• Paquete A. Si recibe $50,000 o más se comprará una televisión,
un modular, tres pares de zapatos, cinco camisas y cinco pantalones.
• Paquete B. Si recibe menos de $50,000 pero más (o igual) de
$20,000, se comprará una grabadora, tres pares de zapatos,
cinco camisas y cinco pantalones.
• Paquete C. Si recibe menos de $20,000 pero más (o igual) de
$10,000, se comprará dos pares de zapatos, tres camisas y tres
pantalones.
• Paquete D. Si recibe menos de $10,000, se tendrá que conformar con un par de zapatos,
 dos camisas y dos pantalones.
*/

//SOLUCIÓN

/*
let dinero = +prompt("Cantidad de dinero que recibió:");


if (dinero>=50000 ){   
    console.log(`Puede comprar el paquete: A`);
} else if (dinero >=20000 && dinero <50000 ) {
    console.log(`Puede comprar el paquete: B`);
} else if (dinero >=10000 && dinero <20000) {
    console.log(`Puede comprar el paquete: C`);
} else 
    console.log(`Puede comprar el paquete: D`);
*/