const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Animal = require("../models/Animal.model");
const generoAnimalOK = require("../../utils/generoAninalOk");
const enumOk = require("../../utils/enumOk");
const Shelter = require("../models/Shelter.model");

const create = async(req,res,next) =>{

let cathImg = req.file?.path;

try{

    await Animal.syncIndexes();

    const newAnimal = new Animal(req.body)

    if (req.file) {
        newAnimal.image = cathImg
    } else {
        newAnimal.image = "https://res.cloudinary.com/dqagf3leo/image/upload/v1710659992/bpuvfi1hm39lvhgwh90x.png"
    }

    const saveAnimal = await newAnimal.save();

    if (saveAnimal) {
        return res.status(200).json(saveAnimal)
    } else {
        return res.status(404).json("Fallo al guardar el animal en la base de datos")
    }

}catch(error){
    req.file?.path && deleteImgCloudinary(cathImg);
    return (
        res.status(404).json({
          messege: "error en el creado del elemento",
          error: error,
        }) && next(error)
      );
}
}

const getByid = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const animalById = await Animal.findById(id)
        if(animalById){
            return res.status(200).json(animalById)
        }
        else{
            return res.status(202).json("No se ha encontrado el animal con ese id")
        }

    } catch (error) {
        return res.status(404).json("Escribe al menos un id")
    }
}

const getAll = async (req, res, next) =>{
    try {
        const allAnimal =await Animal.find();
        if(allAnimal.length>0){
            return res.status(200).json(allAnimal)
        }
        else{
            return res.status(404).json("No se han econtrado animales")
        }
    } catch (error) {
        return res.status(404).json({
            error:"Error en la busqueda de animales",
            message:error.message
        }

        )
    }
}

const getAnimalbyName = async (req, res, next) =>{
    try {
        const { name } = req.params;
        const animalByName = await Animal.find({name})
        if(animalByName.length>0){
            return res.status(200).json(animalByName)
        }
        else{
            return res.status(202).json("No se ha encontrado el animal con ese nombre ")
        }

    } catch (error) {
        return res.status(404).json({
            error:"Error en la busqueda por nombre",
            message: error.message,
        })
    }
}

const updateAnimal = async (req,res,next) => {
await Animal.syncIndexes()
let cathImg = req.file?.path;

try {
    const { id } = req.params;
    const animalById = await Animal.findById(id);

    if (animalById) {
        const oldImg = animalById.image;

        const customBody = {
            _id: animalById._id,
            name:req.body.name ? req.body.name : animalById.name,
            image:req.file?.path ? cathImg : oldImg,
            weight:req.body.weight ? req.body.weight : animalById.weight,

        };

        if(req.body?.gender){
            const resultEnum = generoAnimalOK(req.body?.gender)
            customBody.gender = resultEnum.check
            ? req.body?.gender
            : animalById.gender
        }

        try {
            await Animal.findByIdAndUpdate(id,customBody)
            if(req.file?.path){
                deleteImgCloudinary(oldImg);
            }

            const animalByIdUpdate = await Animal.findById(id);
            const elementUpdate = Object.keys(req.body);
            let test = [];
            elementUpdate.forEach((item) => {
                if(req.body[item] == animalByIdUpdate[item]){
                    test[item] = true;
                }else{
                    test[item]=false;
                }
            });
            
            if(req.file){
                animalByIdUpdate.image === req.file?.path
                ? (test = {...test, file:true})
                :  (test = {...test, file:false}) 
            }

            let acc = 0;

            for (clave in test) {
                test[clave] ==false && acc++;
            }

            if (acc > 0) {
                return res.status(404).json({
                    dataTes: test,
                    update: false,
                    error:"Error en el testeo"
                });
            } else {
                return res.status(200).json({
                    dataTes: test,
                    update: true,
                    message: "todo esta bien en el test"
            })
        
        } 
    }catch (error) {
        return res.status(404).json({
            error: error.message,  
            message:"No se ha actualizado el animal"
        });
        }
    } else {
        return res.status(404).json({
            error: error.message,  
            message:"El animal no exite"
        });
    }
} catch (error) {
    return res.status(404).json({
        error: error.message,  
        message:"No hay ningún animal con ise ID"
    });
}

}

const deleteAnimal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findByIdAndDelete(id);

        if (animal) {
           
            try {
                const result = await Shelter.updateMany(
                    { animals: id }, 
                    { $pull: { animals: id } } 
                );

                console.log(result); 

                return res.status(result ? 200 : 404).json({
                    deleteTest: result ? true : false
                });
            } catch (error) {
                return res.status(404).json({ error: error.message });
            }
        } else {
            return res.status(404).json("El animal no existe");
        }
    } catch (error) {
        // Si hay un error en el proceso de eliminación del animal, devuelve un mensaje de error
        return res.status(404).json(error.message);
    }
};

module.exports = {
    create, 
    getByid,
    getAll,
    getAnimalbyName,
    updateAnimal,
    deleteAnimal
}