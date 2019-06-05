const mongoose = require("mongoose");
const validator = require("validator");

//Declaring the Referral Object Structure


const Referral = mongoose.modelNames("referral", {

    name:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
        validate(value){
            if(value.length < 10){
                console.log("Invalid Number")
            }
        }
    },
    referralID :{
        type: String,
        required: true,
        validate(value){
            if(!value.length === 6 ){
                console.log("Input Referral ID is Less than or More than 6") 
            }
        }
    },
    countHit:{
        type: Number
    }
})