const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimalSchema = new Schema(
    {
        name:{
        type: String,
        required: false,
        unique: false,
        },
        gender:{
            type: String,
            enum: ["macho","hembra","no definido"],
            require:false,
        },
        image:{
            type: String,
            required: false,
        },
        weight:{
            type:Number,
            required: false
        },
        shelters:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"shelter",
        }],
    },
    {
        timestamps:true,

    }
)

const Animal = mongoose.model("Animal",AnimalSchema);

module.exports = Animal;