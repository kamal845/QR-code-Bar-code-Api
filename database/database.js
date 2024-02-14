const mongoose = require('mongoose');
const dbConnection="mongodb://localhost:27017/fouthproject";
const connectDB=async()=>{
try {
  await mongoose.connect(dbConnection,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
    });
    console.log("database is connected");
} catch (error) {
    console.log("error");
}
};
module.exports=connectDB;