const router = require("express").Router();

const controller = require("../controllers/flightController");

router
    .get("/", controller.getFlights)
    .post("/", controller.bookFlight)
    .get("/:id", controller.getSingleFlight)
    .put("/:id", controller.updateFlight)
    .delete("/:id", controller.deleteFlight);




module.exports = router;