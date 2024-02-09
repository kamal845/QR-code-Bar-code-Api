const express=require("express");
const app=express();

try {
    app.listen(3000,()=>{
        console.log("server is started on port no.3000");
    })
} catch (error) {
    console.log("error");
}