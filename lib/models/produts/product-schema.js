const mongoose=require('mongoose');

const product=mongoose.Schema({
  category:{type:String,require:true} ,
  name:{type:String,require:true} ,
  display_name:{type:String,require:true},
  description:{type:String,require:true} ,
});
module.exports=mongoose.model('product',product);