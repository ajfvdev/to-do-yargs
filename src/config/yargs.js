const argv = require("yargs")
    .command("crear", "crea una tarea por hacer", {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "descripcion de la tarea por hacer"
        }
    })
    .command("actualizar", "actualiza una tarea", {
        id: {
            demand: true,
            alias: "i",
            desc: "ID de la tarea por hacer"
        },
        completado: {
            default: true,
            alias: "c",
            desc: "Estado de la tarea actual"
        }
    })
    .command("mostrar", "muestra los datos", {
        id: {
            default: 0,
            alias: "i",
            desc: "coloca el id de la tarea (to-do)"
        }
    })
    .command("borrar", "borra la tarea indicada", {
        id: {
            demand: true,
            alias: "i",
            desc: "ID de la tarea por hacer"
        }
    })
    .help()
    .argv;

module.exports = argv;