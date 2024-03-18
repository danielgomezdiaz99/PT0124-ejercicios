const { upload } = require("../../middleware/files.middleware");
const { create, getByid, getAll, getAnimalbyName, updateAnimal, deleteAnimal } = require("../controllers/Animal.controllers");

const AnimalRoutes = require("express").Router();

AnimalRoutes.post("/", upload.single("image"), create);
AnimalRoutes.get("/:id", getByid);
AnimalRoutes.get("/", getAll);
AnimalRoutes.get("/byname/:name", getAnimalbyName);
AnimalRoutes.patch("/:id",upload.single("image"), updateAnimal);
AnimalRoutes.delete("/:id", deleteAnimal);


module.exports = AnimalRoutes;

