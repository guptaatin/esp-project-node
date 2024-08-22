const sql = require("./db.js");

// constructor
const Esp = function(esp) {
  this.status = esp.status;
};

Esp.create = (newEsp, result) => {
console.log("asdcasc---->", newEsp, result)
  sql.query("INSERT INTO esp SET ?", newEsp, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created esp: ", { id: res.insertId, ...newEsp });
    result(null, { id: res.insertId, ...newEsp });
  });
};

Esp.updateById = (id, esp, result) => {
  sql.query(
    "UPDATE esp SET status = ? WHERE id = ?",
    [esp.status, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Esp with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated esp: ", { id: id, ...esp });
      result(null, { id: id, ...esp });
    }
  );
};

module.exports = Esp;