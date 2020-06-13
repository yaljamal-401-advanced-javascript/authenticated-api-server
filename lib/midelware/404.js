'use strict';
module.exports=(req,res,nex)=>{
  res.status(404);
  res.statusMessage='Resourse Not Foound';
  res.json({error:'not found'});  
};