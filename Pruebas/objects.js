// function agregarPropiedad(objeto, property) {
//     // Agrega una propiedad al  objeto(argumento "objeto") con el valor `null`
//     // Devuelve el objeto
//     // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento 
//     //llamado "property" (una cadena/string)
//     // Tu código:
    
//     /*objeto={}
//     objeto[property] = null;
//     return objeto;*/
  
//     objeto={}
//     objeto[property]= null;
//     console.log(objeto.hasOwnProperty(property));
//     console.log(objeto);
//   }

//   agregarPropiedad('nombre','asdfasdfas');
//CREACIÓN DE UN OBJETO 
// var persona = {
//   nombre: "Javier",
//   edad: 26,
//   estudios: true,
//   hablar : function(palabra){
//     console.log(this.nombre + " dice: " + palabra);
//   }
//  }
//  var nombres =[];
//  nombres.push(persona.nombre);

//  //MODIFICAR EL VALOR DE UNA PROPIEDAD DEL OBJETO
//  persona.nombre='Jarvis';
//  ///////////////////////////////////

//  nombres.push(persona.nombre);
//  console.log(persona.nombre); 
//  console.log("Antes persona se llamaba " + nombres[0] + "\nAhora se llama " + nombres[1]);
//  console.log(nombres);

//   //CREACIÓN DE UNA PROPIEDAD PARA EL OBJETO
//  persona['agenda'] = ['lunes','martes','miercoles'];
//  /////////////////////////////////////
//  console.log(persona.agenda);

//  //MANERAS DE INVOCAR FUNCIÓN DEL OBJETO
//  persona['hablar']('esta es otra manera de invocar una función de un método');
//  persona.hablar('Kiubo gonorrea, tengo libres los');
//  var hacerAlgo = function(unObjeto,unaFuncion){
//   //ESTA ES UNA MANERA DE INVOCAR UNA FUNCIÓN DE UN OBJETO QUE VIENE DENTRO DE UN ARGUMENTO
//   unObjeto[unaFuncion]();
//   //////////////////////
//  }
//  /////////////////////////

//  for(let i=0; i<persona.agenda.length;i++){
//   console.log(persona.agenda[i]);
//  }

// //VERIFICAR SI UN OBJETO CONTIENE UNA PROPIEDAD EN ESPECÍFICO
//  console.log('La propiedad consultada existe dentro del objeto: '+persona.hasOwnProperty('edad'));
// /////////////////////////////////
 
// //RETORNA UN ARREGLO CON TODAS LAS PROPIEDADES DE UN OBJETO
// console.log(Object.keys(persona));
// ////////////////////////////////////////////////////////


// var mundo = {
//   paises:500,
//   continentes:5,
//   oceanos:5,
//   personas:1234234,
// }
// //ASÍ SE RECORRE CADA PROPIEDAD DE UN MÉTODO
// for(let prop in mundo){
//   console.log('Este es el nombre de la propiedad: '+prop);
//   console.log('Y este es el valor de esa propiedad: '+mundo[prop]+'\n');
// }
// //////////////////////////////////////////////

 var usuario = {
  posts: [post={likes:1},
          post={likes:4},
          post={likes:10}],
  nombre:'jarvis',
 }
 for(let prop1 in usuario){
  console.log(prop1);
  console.log(usuario[prop1]);
  console.log(usuario[prop1].length)
  for(let i=0;i<usuario[prop1].length;i++){
        console.log(usuario[prop1][i]);
  }
  // for(let prop2 in usuario[prop1]){
  //   console.log(usuario[prop1]);
  // }
  // for(let prop2 in usuario[prop1]){
  //   console.log(usuario[prop2]);
  // }
 }