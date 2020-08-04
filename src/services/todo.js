const fs = require("fs");
const colors = require("colors");

const dbRuta = 'src/db/datos.json';

let dataList = [];


const cargarDB = () => {

try { 

dataList = require("./../db/datos.json");

}catch(error){
dataList = [];
}

}

const guardarDB = () => {

let dataJson = JSON.stringify(dataList);

fs.writeFile(dbRuta, dataJson, (error) => {

if(error) throw new Error("No se pudo guardar..", error);

});

}

const mostrarId = async (id) => {

let data = []

dataList.forEach(value => {
if(value["id"] == id)
data[0] = value;
});

return data;

}

const crear = (descripcion) => {

cargarDB();

let value = {
id: (dataList.length + 1),
descripcion: descripcion,
completado: false
};

dataList.push(value);

guardarDB();

return value;

}

const mostrar = async (id) => {

cargarDB();

let values = [];

if(id == 0)
values = dataList;
else
values = await mostrarId(id);

values.forEach(value => {
console.log("=========".green + " TAREA ".yellow + "==========".green);
console.log(`ID: ${ value["id"] }`.gray);
console.log(value["descripcion"]);
console.log(`Estado: ${ value["completado"] ? "realizada".green : "pendiente".red } `);
console.log("========================== \n".green);
});

}

const actualizar = (id, estado) => {

cargarDB();

let actualizado = null;

dataList.forEach(value => {

if(value["id"] == id){

value["completado"] = estado === "false" ? false : true;

actualizado = {
id: id,
descripcion: value["descripcion"],
completado: estado
};

}

});

guardarDB();

return actualizado;

}


const borrar = (id) => {

cargarDB();

let searching = true;

for(let i = 0; i < dataList.length && searching; i++){

if(dataList[i]["id"] == id){
dataList.splice(i, 1);
searching = false;
}

}

guardarDB();

if(searching)
return false;
else
return true;


}

module.exports = {
crear,
mostrar,
actualizar,
borrar
}