module.exports = app => {
    const esps = require("../controllers/esp.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Esp
    router.post("/", esps.create);
  
    // // Retrieve all Esps
    // router.get("/", esps.findAll);
  
    // // Retrieve a single Esp with id
    // router.get("/:id", esps.findOne);
  
    // Update a Esp with id
    router.put("/:id", esps.update);
  
    // // Delete a Esp with id
    // router.delete("/:id", esps.delete);
  
    // // Delete all Esps
    // router.delete("/", esps.deleteAll);
  
    app.use('/api/esp/', router);
  };