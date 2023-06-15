const mongoose = require('mongoose');
require("dotenv").config();

const connect = async()=>{
    return await mongoose.connect(`mongodb+srv://krishnamoorthy:krishna2000@cluster0.exf7eoz.mongodb.net/Bluelock?retryWrites=true&w=majority`)
}

module.exports = connect;