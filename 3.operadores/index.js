//Operadores aritméticos:
// EJEMPLOS:
// //Suma (+) :Suma dos números: 3 + 2 = 5 . Si en lugar de números se suman 
// cadenas, como por ejemplo "A" + "B" = "AB" se produce una concatenación. 
// Si alguno de los elementos a concatenar no es una cadena de texto, queda 
// convertido a cadena: "AB" + 123 = "AB123" .
//Resta (-). Halla la diferencia entre dos números. Ejemplo A: 3-2 = 1 . 
// Ejemplo B: (-1)-(-2) = 1 .

//Negativo (-) :Indica el signo negativo de un número o una expresión: -3.

// División (/): Divide dos números, obteniendo un cociente de coma 
// flotante: 5 / 2 = 2.5 . Fíjate en que el separador decimal es el punto.

//Módulo aritmético %. Divide dos números, obteniendo un resto entero: 5 % 2 = 1 .

//Multiplicación (*):Multiplica dos números: 3 * 2 = 6 .

//Incrementos y decrementos (++   --). Incrementa o decrementa el valor 
// de una variable numérica en una unidad. No puede aplicarse a un literal. 
// Pueden darse dos casos:

//var A, B; B = 2; 

 //A =  ++B  
//A =  B++




// EJEMPLOS DE OPERADORES LOGICOS:
"gato" && "perro" //devuelve "perro"
"gato" && false //devuelve falso
0 && "gato"  //devuelve 0 (que es un valor falso)

"gato" || "perro" //devuelve "gato"
"gato" || false //devuelve "gato"
0 || "gato" //devuelve "gato"



// EJEMPLO DE OPERADORES DE COMPARACIÓN:
console.log(1 == 1);
// expected output: true

console.log('hello' == 'hello');
// expected output: true

console.log('1' ==  1);
// expected output: true

console.log(0 == false);
// expected output: true

// EJEMPLOS DE OPERDORES BINARIOS:
// 9 << 2 = 36 con valor negativo: -9 << 2 = -36

// Primero convierte a binario el primer operando 9 = 1001   A continuación añade a su derecha el número de bits cero que indique el segundo operando (2). Resulta: 1001 00 = 36
// 9 >> 2 = 2 con valor negativo: -9 >> 2 = -3

// Primero convierte a binario el primer operando 9 = 1001   A continuación, y comenzando de derecha a izquierda, elimina el número de bits que indique el segundo operando (2). Resulta: 10 = 2
// 9 >>> 2 = 2 con valor negativo: -9 >>> 2 = 1073741821

// Funciona igual que el anterior con números positivos. Con números negativos no está muy claro lo que hace.




// EJEMPLO DE OPERADORES DE ASIGNACIÓN:
let x = 2;
const y = 3;

console.log(x);
// expected output: 2

console.log(x = y + 1); // 3 + 1
// expected output: 4

console.log(x = x * y); // 4 * 3
// expected output: 12
EJEMPLO:
// Asumimos las siguientes variables
//  x = 5
//  n = 10
//  z = 25

x = n     // La variable x contiene el valor 10
x = n = z // x = n (es decir 10) y z pisa el valor total remplazandolo por 25
