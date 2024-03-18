const { createShelter,toogleShelter } = require("../controllers/Shelter.controllers");
const Shelter = require("../models/Shelter.model");
 

const shelterRoutes = require("express").Router();

shelterRoutes.post("/",createShelter)
shelterRoutes.patch("/addShelter/:id",toogleShelter)


module.exports = shelterRoutes