const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({
   
    Driver_id : {
        type : String,
        required : true
    },

    Driver_name : {
        type : String,
        required : true
    },

    Licence : {
        type : String,
        required : true
    },

    email : {
        type : email,
        required : true
    },

    nic : {
        type : String,
        required : true 
    },

    mobile : {
        type : String,
        required : true
    }

})


module.exports = mongoose.model("Driver",driverSchema);

//const Driver = mongoose.model("Driver",driverSchema);

//module.exports = Driver;