const express = require("express");
require('./db/mongoose');
const Referral = require("./models/referral");
const app = express();
const port = process.env.PORT || 3000;



app.use(express.json());
//Parses the incoming JSON data into JS object.



//Endpoint for Creating NEW Refferal Code 
app.post('/referral' , (request , response)=>{

    const referral = new Referral(request.body);

    referral
    .save()
    .then((resolve)=>{
        response.send(request.body)
    })
    .catch((error)=>{
        response.status(404);
        response.send("ERROR. Invalid Entry")
    })

})



//Endpoint for Getting ALL Referral Codes
app.get('/referral' , (request , response)=>{

    Referral.find({})
    .then((resolve)=>{
        response.send(resolve)
    })
    .catch((reject)=>{
        response.status(404);
        response.send("ERROR")
    })
})


//Enpoint for Getting Referral Code by Phone Number
app.get('/referral/:id' , (request , response)=>{
    
   let phoneNumber = request.params.id;
   Referral.find({
       phone: phoneNumber
   })
   .then((resolve)=>{
       response.send(resolve);
   })
   .catch((reject)=>{
       response.status(404);
       response.send("ERROR")
   })


})

//Endpoint for Deleting Referral Code by Phone Number
//Enpoint for Updating Referral Code by Phone Number


app.listen(port,()=>{
    console.log("Server Running on " + port)
})