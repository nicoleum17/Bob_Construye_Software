const db = require("../util/database");
const bcrypt = require("bcryptjs");

module.exports = class Usuario {
  constructor(username, password, role = "user") {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  save() {
    return bcrypt.hash(this.password, 12).then((hashedPassword) => {
      return db.execute(
        "INSERT INTO usuarios (username, password, role) VALUES (?, ?, ?)",
        [this.username, hashedPassword, this.role]
      );
    });
  }

  static fetchOne(username) {
    return db.execute("SELECT * FROM usuarios WHERE username = ?", [username]);
  }
};
