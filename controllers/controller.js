const express=require('express');
const qrcode1=require("../models/qrcode.schema");
const qrcode = require("qrcode");
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
                lineColor: "black",
                width: 4,
                height: 10,
                displayValue: false
            });

            // Convert canvas to data URL
            const dataUrl = canvas.toDataURL('image/png');
            res.render('index', { data: dataUrl });
            const barCode = new barcode({
                data: dataUrl,
                createdAt: Date.now(),
                isused: false
            });
    
            await barCode.save();
            // Render the EJS template with the data URL
        } catch (error) {
            console.log("Error generating barcode:", error);
            res.status(500).send("Internal Server Error");
        }
    },
   
    generateqrcode: async (req, res) => {
        try {
            const { qrcodee } = req.body;
    
            if (!qrcodee || typeof qrcodee !== 'string') {
                throw new Error('Invalid qrcodee data. Non-empty string required.');
            }
    
            const qrCodeImage = await qrcode.toDataURL(qrcodee, {
                type: 'image/png',
                color: {
                    dark: '#000',
                    light: '#fff'
                },
                width: 4,
                height: 4,
            });
    
            // Save to MongoDB (assuming qrcode1 is your MongoDB model)
            const qrCode = new qrcode1({
                data: qrCodeImage, // Save the data URL
                createdAt: Date.now(),
                isused: false
            });
    
            await qrCode.save();
    
            res.render('index2', { data: qrCodeImage });
        } catch (error) {
            console.log("Error generating qrcode:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    
    
}


