const express = require('express');
const catagories =require('../lib/models/categrories/catogry-model.js');
const products=require('../lib/models/produts/product-model.js');
const acl=require('../lib/auth/middleware/acl.js');
const bearer=require('../lib/auth/middleware/berar.js');
const berar = require('../lib/auth/middleware/berar.js');


const router = express.Router();

router.param('model',getModel);

function getModel(req, res, next) {
  const model = req.params.model;
  switch (model) {
  case 'categories':
    req.model=catagories;
    next();
    return;     
  case 'products':
    req.model=products;
    next();
    return;
  default:
    next('Invaled Model');
    return;
  }
}

//-----------------Routs-------------------------------
router.get('/:model',getHandler);
router.get('/:model/:id',getByIdHandler);
router.post('/:model',bearer,acl('add'),postHandler);
router.put('/:model/:id',bearer,acl('update'),updateByIdHandler);
router.delete('/:model/:id',berar,acl('remove'),deleteHandler);
router.patch('/:model/:id',berar,acl('update'),patchByIdHandler);

//-----------------patchByIdHandler-------------------------------

async function patchByIdHandler(req,res,next) { 
  const id=req.params.id;
  try{
    const data = await req.model.update(id,req.body);
    res.json(data);
  } catch(error){
    next(error.message);
  }
}



//-----------------getHandler-------------------------------

async function getHandler(req,res,next) { 
  try{
    console.log('hiiiiiiii',req.model);
    const data = await req.model.get();
    console.log('get',data);
    const count=data.length;
    const result=data;
    res.json({count,result});
  } catch(error){
    next(error.message);
  }
}

//-----------------getByIdHandler-------------------------------
async function getByIdHandler(req,res,next) {
  const id=res.params.id;
  try{
    const data = await req.model.get(id);
    res.json(data);
  } catch(error){
    next(error.message);
  }
}

//-----------------postHandler-------------------------------
async function postHandler(req,res,next) {
  try{
    const data = await req.model.create(res.body);
    res.json(data);
  } catch(error){
    next(error.message);
  }
}

//-----------------updateByIdHandler-------------------------------
async function updateByIdHandler(req,res,next) {
  const id=req.params.id;
  try{
    const data = await req.model.update(id,req.body);
    res.json(data);
  } catch(error){
    next(error.message);
  }
}
  
//-----------------deleteHandler-------------------------------
async function deleteHandler(req,res,next) {
  const id=req.params.id;
  try{
    const data = await req.model.delete(id);
    res.json({});
  } catch(error){
    next(error.message);
  }
}

module.exports=router;