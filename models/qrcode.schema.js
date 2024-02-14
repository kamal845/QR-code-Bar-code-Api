const mongoose= require('mongoose');
const qrcodeSchema= mongoose.Schema({
    qrcodee:{
    type:String,
    required:false
},
createdAt:{
    type:Date,
    default:Date.now(),
    required:true
},
isused:{
    type:Boolean,
    default:false
}
})
const qrCode=mongoose.model('qrcode',qrcodeSchema);
module.exports=qrCode;