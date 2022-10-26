const mongoose = require('mongoose');

//connect with mongoDB
const mongoConnect = async ()=>{
    
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDb Connected Successful`);
    } catch (error) {
        console.log(error.message);
    }

}

//export mongoConnect
module.exports = mongoConnect;