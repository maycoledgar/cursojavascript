//averiguar las diferencias entra let y var
// la cocina del codigo
/*VAR la cual define una variable 
  global o local en una función sin importar el ámbito del bloque.*/
  
  var tipo=("hola")
  console.log(tipo)
 
 /*let te permite declarar variables limitando su alcance 
 al bloque, declaración, o expresión donde se está usando.*/

   let tipo2=(9)
   console.log(tipo2)

 

 //la cocina del codigo//
    /*https://www.youtube.com/c/LaCocinadelC%C3%B3digo*/
    

//hosting, scope
//contexto gobal y local

/*Scope
  El scope define el alcance o la visibilidad de las variables en algún punto de la ejecución del código.
  En los navegadores existe un scope global, que es el objeto window; en Node.js es el objeto global.*/

  /*Hoisting
  Hoisting es el comportamiento por defecto de JavaScript en el que la declaración de variables y funciones se mueve automáticamente al principio del scope (ya sea el principio del archivo, la función o el bloque). Veamos un ejemplo:
  hello*/

  function hello() {
    console.log("Hola")
    }
  
  //contexto global y local//
    /*Una variable global es aquella que está disponible a lo largo del script actual, es decir, dentro
    de todo el código JavaScript que se está escribiendo.*/
    /*Las variables locales sólo resultan visibles y disponibles dentro de la función en la que están definidas.*/
  
