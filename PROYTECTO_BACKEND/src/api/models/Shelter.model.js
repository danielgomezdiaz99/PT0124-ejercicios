const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShelterSchema = new Schema(
    {
        name:{
            type: String,
            required: false,
            unique: false,
            },
        area :{
            type: Number,
            required: false,
        },
        city:{
            type:String,
            require:false,
        },
        country:{
            type:String,
            require:false,
        },
        animals:[{
            type: mongoose.Schema.Types.ObjectId, 
            ref : "Animal",
        }]
    },
    {
        timestamps:true,

    }
)

const Shelter = mongoose.model("Shelter",ShelterSchema);

module.exports = Shelter;