const express=require('express');
const controller=require('../controllers/controller');
const router=express.Router();
router.post('/barcode',controller.barCode);
router.post('/qrcode',controller.qrcode);
