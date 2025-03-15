const db = require("../util/database");

module.exports = class Producto {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(mi_nombre, mi_cantidad) {
    this.nombre = mi_nombre;
    this.cantidad = mi_cantidad;
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute("INSERT INTO productos(nombre, cantidad) VALUES (?, ?)", [
      this.nombre,
      this.cantidad,
    ]);
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return db.execute("SELECT * FROM productos");
  }

  static fetchOne(id) {
    return db.execute("SELECT * FROM productos WHERE id = ?", [id]);
  }

  static fetch(id) {
    if (id) {
      return this.fetchOne(id);
    } else {
      return this.fetchAll();
    }
  }
};
