// existen 3
// averiguar su concepto aplicacion y ejercicios.aplicacion


// CONCEPTO DE FOR:
// La estructura repetitiva For (desde) es aquella en la que el número de iteraciones se conoce por anticipado, y por ello no se precisa
//  poner ninguna condición de salida para detener el bucle. En su lugar un contador cuenta el número de iteraciones fijas y se termina
//   cuando llega al valor final previamente definido.


// CONCEPTO DE DO-WHILE:
// En resumen un ciclo do-while, es una estructura de control cíclica que permite ejecutar de manera repetitiva un bloque de instrucciones
//  sin evaluar de forma inmediata una condición especifica, sino evaluándola justo después de ejecutar por primera vez el bloque de 
//  instrucciones.

// EJEMPLO DE (for):
for(let i=2;i<=10;i+=2){
    console.log(i)
}

//ejemplo 2:
main() {
    int n,i;
    int suma;
    printf("Suma desde 0 hasta n.\n");
    printf("Introduce un número n: ");
    scanf("%i", &n);
    for(i=suma=0;i<=n;i++)
    suma=suma+i;
    printf("Suma desde 0 hasta %d=%d\n", n, suma); 
}
     




//ejemplo de (while):
let eval =true
let eval2='salida'
while(eval==true){
    if(eval2=='salida'){
        console.log('hasta pronto')
        eval=false
    }
    console.log('hello')
}
// ejemplo 2:
let eval =true
let eval2='salida'
while(eval==true){
    if(eval2=='salida'){
        console.log('hasta pronto')
        eval=false
    }
    console.log('hello')
}






//ejemplo de (do):
#include <stdio.h>

main() {    /* visualizar los números del 0 al 9.*/

int digito=0;
do

printf("%d ",digito++);
while (digito<=9);
}