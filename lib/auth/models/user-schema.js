const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');
const user=mongoose.Schema({
  username:{type:String,require:true},
  password:{type:String,require:true},
  role:{
    type:String,
    default:'user',
    enm:['admin','editor','writer','user'],
  },
});
user.pre('save',async function(){
  this.password=await bcryptjs.hash(this.password,5);
});
module.exports=mongoose.model('user',user);