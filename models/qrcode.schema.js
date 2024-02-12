const mongoose= require('mongoose');
const qrcodeSchema= mongoose.Schema({
    data:{
    type:String,
    required:true
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