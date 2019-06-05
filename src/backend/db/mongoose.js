const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://Rahul-Test:MK%40043074@sample-db-ud8rv.mongodb.net/crunch?retryWrites=true&w=majority" , {
    useNewUrlParser: true,
    useCreateIndex: true

});


// const test = mongoose.model('crunch-referrals' , {

//     name:{
//         type:String
//     }
// })


// //Sample testing data

// new test({
//     name:"Rahul"
// })
// .save()
// .then((resolve)=>{
//     console.log("SUCCESS")
// })
// .catch((error)=>{
//     console.log("ERROR")
// })