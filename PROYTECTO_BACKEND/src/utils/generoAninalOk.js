const generoAnimalOK = (gender) =>{
    const animalGender = ["macho","hembra","no definido"];
    if(animalGender.includes(gender)){
    return {check : true,gender}
    }
    else{
        return {
            check: false
        }
    }
}


module.exports = generoAnimalOK;