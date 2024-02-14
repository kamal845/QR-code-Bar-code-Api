const mongoose=require('mongoose');
const codeSchema = mongoose.Schema({
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
const barCode=mongoose.model('barcode',codeSchema);
module.exports=barCode;