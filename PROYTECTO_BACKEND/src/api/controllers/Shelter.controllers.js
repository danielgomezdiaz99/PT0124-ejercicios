const Shelter = require("../models/Shelter.model")
const Animal = require("../models/Animal.model")

const createShelter = async (req, res, next) => {
    try {
        await Shelter.syncIndexes();
        const newShelter = new Shelter(req.body)
        const saveShelter = await newShelter.save()

        return res
            .status(saveShelter ? 200 : 400)
            .json(saveShelter ? saveShelter : " error al crear el refugio")
    } catch (error) {
        return res.status(404).json({
            error: "Erro en el catch",
            message: error.message

        }) && next(error)
    }
}

const toogleShelter = async (req, res, next) => {
    try {
        
        const {
            id
        } = req.params;
        const {
            animals
        } = req.body; 
       
        const sheltherById = await Shelter.findById(id);

        if (sheltherById) {
            
            const arrayIdAnimals = animals.split(",");
            Promise.all(
                arrayIdAnimals.map(async (animal, index) => {
                    if (sheltherById.animals.includes(animal)) {
                        

                        try {
                            await Shelter.findByIdAndUpdate(id, {
                                $pull: {
                                    animals: animal
                                },
                            });

                            try {
                                await Animal.findByIdAndUpdate(animal, {
                                    $pull: {
                                        shelters: id
                                    },
                                });
                            } catch (error) {
                                res.status(404).json({
                                    error: "error update animal",
                                    message: error.message,
                                }) && next(error);
                            }
                        } catch (error) {
                            res.status(404).json({
                                error: "error update shelter",
                                message: error.message,
                            }) && next(error);
                        }
                    } else {
                       

                        try {
                            await Shelter.findByIdAndUpdate(id, {
                                $push: {
                                    animals: animal
                                },
                            });
                            try {
                                await Animal.findByIdAndUpdate(animal, {
                                    $push: {
                                        shelters: id
                                    },
                                });
                            } catch (error) {
                                res.status(404).json({
                                    error: "error update animal",
                                    message: error.message,
                                }) && next(error);
                            }
                        } catch (error) {
                            res.status(404).json({
                                error: "error update shelter",
                                message: error.message,
                            }) && next(error);
                        }
                    }
                })
            )
                .catch((error) => res.status(404).json(error.message))
                .then(async () => {
                    return res.status(200).json({
                        dataUpdate: await Shelter.findById(id).populate("animals"),
                    });
                });
        } else {
            return res.status(404).json("este refugio no existe");
        }
    } catch (error) {
        return (
            res.status(404).json({
                error: "error catch",
                message: error.message,
            }) && next(error)
        );
    }
};




module.exports = {
    createShelter,
    toogleShelter
}