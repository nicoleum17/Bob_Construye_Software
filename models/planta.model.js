const db = require("../util/database");

const plantas = [];

//control de datos
module.exports = class Planta {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(mi_nombre) {
    this.nombre = mi_nombre;
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    //promesa
    db.execute("INSERT INTO plantas(nombre) VALUE (?)", [this.nombre])
      //then: funcion que se ejecuta si la promesa se cumple
      .then(() => {
        console.log("planta guardada");
      })
      //catch: si no se cumple
      .catch((error) => {
        console.log(error);
      });
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return plantas;
  }
};
