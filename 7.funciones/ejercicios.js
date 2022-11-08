// averiguar concepto:

// FUNCIONES CONCEPTO

// Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento
//  un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar
//  alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la Salida. 



// arrow function o funciones flechas

// pasos para contruir una fuction 
// 1. palabra rservada fuction
// 2. poner un nombre que describa el trabajo.
// que realizara la funciones
// 3. la funcion puede recibir parametros.
// pero si o si indicar que tendra parametros
// ()
// (nombre)
// dato IMPORTANTE. una funcion siempre tiene que 
// retormar un tipo de dato.


function saludo(nombre,apellido){
    let saludo='hola como estas que necesitas? '+nombre+' '+apellido
    return saludo
}
// para usar una funcion debo llamar a la funcion 
console.log(saludo('maycol', 'huarcaya'))
console.log(saludo('edgar', 'alegria'))






// EJERCICIOS PROFE:


// crear un funcion de 
// function contarVocales(texto)return(cantidadVocales)


function contarVocales(palabra){
    let contador=0
    for (let i=0 ;i<palabra.length;i++){
            switch(palabra[i]){
                 case 'a': case 'e' : case 'i' : case 'o' : case 'u':
             contador+=1
            }
        }
    let contarVocales= 'tienes este numero de vocales ' +contador
        return contarVocales
    } 
console.log(contarVocales('maycol edgar es un trome.'))






// contarVocales('eucalipto') //5

// function calculadora(num1,num2,operacion)(return total)



function calcular (num1,num2,operacion){
    if(operacion=="suma"){
     total=num1+num2
    }
    if(operacion=="resta"){
        total=num1-num2
    }
    if(operacion=="multiplicacion"){
        total=num1*num2
    }
    if(operacion=="division"){
            total=num1/num2
    }
    return total
}
console.log(calcular(50,5,"division"))




// calculadora(45,12,'resta') //33
