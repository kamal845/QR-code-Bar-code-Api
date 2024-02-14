const express=require('express');
const app = express();
const route=require('../routes/route');
app.use('/bar', route);
app.use('/qr',route);
module.exports = app;