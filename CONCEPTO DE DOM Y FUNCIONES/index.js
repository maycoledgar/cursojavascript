// CONCEPTO DE DOM.

// Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML. Una página HTML está formada por múltiples etiquetas HTML, 

// anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM (o simplemente DOM).

// EL OBJECT DOCUMENT

// En Javascript, la forma de acceder al DOM es a través de un objeto llamado document, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos. 

//En su interior pueden existir varios tipos de elementos, pero principalmente serán ELEMENT o NODE :

// *ELEMENT : no es más que la representación genérica de una etiqueta: HTMLElement.

// *NODE : Es una unidad más básica, la cual puede ser ELEMENT  o un nodo de texto.

// Todos los elementos HTML, dependiendo del elemento que sean , tendrán un tipo de dato específico. Algunos ejemplos: 

// TIPO DE DATO  --------- // TIPO ESPECÍFICO ---------- // ETIQUETA ------.. // DESCRIPCIÓN.

// ELEMENT HTMLElement ---- // HTMLDivElement ---------- // <div> ----------- // Capa divisoria invisible (en bloque).
// ELEMENT HTMLElement ---- // HTMLSpanElement --------- // <span> ---------- // Capa divisoria invisible (en línea).
// ELEMENT HTMLElement ---- //HTMLImageElement --------- // <img> ----------  // Imagen.
// ELEMENT HTMLElement ---- // HTMLAudioElement -------- // <audio> --------  // Contenedor de audio.