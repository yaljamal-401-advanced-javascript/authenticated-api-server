'use strict';
require('dotenv').config();
const express = require('express');
// const router=require('../lib/routes/routers.js');
const morgan=require('morgan');
const cors=require('cors');
const app=express();
// const notFound=require('../lib/404.js');
// const errorServer=require('../lib/500.js');
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// app.use('/api/v1',router);

// app.use('*',notFound);
// app.use(errorServer);
module.exports={
  server:app,
  start:(port)=>{
    const PORT=port||process.env.PORT||3030;
    app.listen(PORT,()=>console.log(`Listning on PORT ${PORT}`));
  },
};