const express=require('express');
const bearerMid=require('./middleware/berar.js');
const acl=require('./middleware/acl.js');

const router=express.Router();

router.get('/secret',bearerMid,(req,res)=>{
  res.json(req.user);
});

router.post('/read',bearerMid,acl('read'),(req,res)=>{
  res.json('OK');
  
});
router.post('/create',bearerMid,acl('create'),(req,res)=>{
  res.json('OK');
  
});
router.put('/update',bearerMid,acl('update'),(req,res)=>{
  res.json('ok');
  
});
router.delete('/delete',bearerMid,acl('delete'),(req,res)=>{
  res.json('ok');
});
module.exports = router;
