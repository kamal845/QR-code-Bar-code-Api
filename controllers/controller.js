const express=require('express');
const qrcode=require("../models/qrcode.schema");
const barcode=require('../models/barcode.schema');
// const {canvas}=require("canvas");
const { createCanvas } = require('canvas');
const jsbarcode=require('jsbarcode');
const jsQR = require('jsqr');
module.exports={
    generatebarCode: async (req, res) => {
        try {
            const { qrcodee } = req.body;

            // Generate barcode using JsBarcode
        const canvas = createCanvas();
            const ctx = canvas.getContext('2d');
            jsbarcode(canvas, qrcodee, {
                lineColor: "#0aa",
                width: 4,
                height: 40,
                displayValue: false
            });

            // Convert canvas to data URL
            const dataUrl = canvas.toDataURL('image/png');

            // Render the EJS template with the data URL
            res.render('index', { data: dataUrl });
        } catch (error) {
            console.log("Error generating barcode:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    
    
    barCode2:async(req,res)=>{
        try {
         //phele scan phir uske baad for image data ko get karne ke liye(pdf,jpg,png) format/ from other page
        } catch (error) {
            
        }
    },
    barCode3:async(req,res)=>{
        try {
         //phele scan phir uske baad for image data(information) ko transfer ke liye(pdf,jpg,png) format/ from other page
        } catch (error) {
            
        }
    },
    barCode4:async(req,res)=>{
        try {
         //phele scan phir uske baad for text data(information) ko transfer ke liye/ from other page
        } catch (error) {
            
        }
    },
    qrcode:async(req,res)=>{
        try {
            
        } catch (error) {
            
        }
    }
}




// const { data } = req.body;
    
// if (!data) {
//     return res.status(400).json({ error: 'Barcode data is required' });
// }

// try {
//     // Decode the barcode using jsQR
//     const decodedData = jsQR(data);

//     if (decodedData) {
//         // Process the decoded data or save it to the database
//         await barcode.create({ data: decodedData.data });

//         res.json({ result: decodedData.data });
//     } else {
//         throw new Error('Failed to decode barcode');
//     }
// } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to parse barcode' });
// }
// },