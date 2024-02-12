const express=require("express");
const connectDB=require("./database/database");
const app=express();
port=3000;
try {
    app.listen(port, () => {
        connectDB().then(() => {
            console.log("Server is started on port no. 3000");
        }).catch(error => {
            console.log("Error connecting to the database:", error);
        });
    });
} catch (error) {
    console.log("Error:", error);
}