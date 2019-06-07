const express = require("express");
const router = express.Router();
const controllers = require("../Controllers/files");

router.post("/postFile", controllers.postFile);
router.post("/projects/all", controllers.getData);
router.get("/projects/country/:country", controllers.getCountryData);
router.delete("/delete-project/:projectRef", controllers.deleteProject);
router.get("/projects/status/completed", controllers.getCompletedProject);
module.exports = router;
