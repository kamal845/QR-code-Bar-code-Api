const express=require("express");
const bodyParser = require('body-parser');
const {canvas}=require("canvas");
const jsQR = require('jsqr');
const connectDB=require("./database/database");
const app=express();
const route = require('./routes/route');
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);

port=3000;
try {
    app.listen(port, (req,res) => {
        connectDB().then(() => {
            console.log("Server is started on port no. 3000");
        }).catch(error => {
            console.log("Error connecting to the database:", error);
        });
    });
} catch (error) {
    console.log("Error:", error);
}
app.get('/',(req,res)=>{
    res.render('index',{data:''});
})
