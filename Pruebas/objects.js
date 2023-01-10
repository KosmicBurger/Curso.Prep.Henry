/*var persona={
    nombre:'Javier',
    edad:28,
    estudia:true,
    pizza:true,
    comer: function(food){
        console.log(this.nombre+' está comiendo '+food);
    }
}
if(persona.edad>18){
    persona.nombre='Jarvis';
    console.log(persona.nombre + ' es mayor de edad');
}
persona.comer('pizza');

var trabajos={}
var diferenciaDeNotaciones = function(prop1,prop2){
    trabajos.prop1=['albañil', 'cerrajero', 'panadero', 'conductor'];
    trabajos[prop2]=['programador','secretaria','puta'];
}

diferenciaDeNotaciones('pesados','noPesados');
console.log(trabajos);
var tienePropiedad= persona.hasOwnProperty('comidaFavorita');
console.log(tienePropiedad);
var todasLasPropiedades = Object.keys(persona);
console.log(todasLasPropiedades);

let mundo = {continentes:5,paises:198,oceanos:5}
for(var prop in mundo){
    if(prop==='paises'||prop==='continentes'){
        continue;
    }
    console.log('Esta es la propiedad: '+prop);
    console.log('Este es el valor: '+mundo[prop]);
}*/


function agregarPropiedad(objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código:
    var objeto = {}
    objeto[property]= null;
    return objeto;
  }

  agregarPropiedad('miObjeto','vacío');