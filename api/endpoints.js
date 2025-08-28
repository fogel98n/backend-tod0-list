const express = require("express");
const router = express.Router(); 

const tareasController = require("../controllers/tareascontroller");

router.get("/tareas", tareasController.getTareas);

module.exports = router;
