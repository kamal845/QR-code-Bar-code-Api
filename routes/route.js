const express=require('express');
const controller=require('../controllers/controller');
const router=express.Router();
router.get('/genbarcode', (req, res) => {
    res.render('index', { data: '' });
});

// Handling POST requests for '/genbarcode' using the generatebarCode function
router.post('/genbarcode', controller.generatebarCode);


router.get('/genqrcode', (req, res) => {
    res.render('index2', { data: '' });
});

// // Handling POST requests for '/genbarcode' using the generatebarCode function
router.post('/qrcode', controller.generateqrcode);


module.exports=router;