const argv = require("./config/yargs.js");

const db = require("./services/todo.js");

let comando = argv._[0];
let value = false;

switch(comando) {

case "crear":
value = db.crear(argv.descripcion);
if(value != null){
console.log(`se creo exitosamente la tarea.`.green);
}else{
console.log(`no se pudo crear la tarea.`.red);
}

break;

case "actualizar":

value = db.actualizar(argv.id, argv.completado);

if(value === null){
console.log(`No se pudo actualizar, por que no existe la tarea con ID: ${ argv.id } `.red);
}else{
console.log(`La tarea: ${ value["descripcion"] } fue actualizada exitosamente!`.green);
}


break;

case "mostrar":

db.mostrar(argv.id);

break;

case "borrar":

let value = db.borrar(argv.id);

if(value)
console.log("La tarea fue eliminada exitosamente..".green);
else
console.log(`La tarea con el ID ${ argv.id } no existe`.red);

break;

default:
console.log("comando no reconocido.");
break;

}
