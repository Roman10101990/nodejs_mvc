let router = require("express").Router();
let controller = require("./../controllers/prodController");

router.post("/add", controller.addProd);
router.get("/show", controller.getAllProd);
router.get("/:title", controller.getByTitle);
router.put("/update", controller.updateProd);

module.exports = router;
