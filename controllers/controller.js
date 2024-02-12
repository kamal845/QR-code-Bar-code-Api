const express=require('express');
const barcode=require('../models/barcode.schema');
const jsbarcode=require('jsbarcode');
module.exports={
    barCode:async(req,res)=>{
        try {
         //phele scan phir uske baad ,for image data decode   
        } catch (error) {
            
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
// const qrcode=require("../models/qrcode.schema");