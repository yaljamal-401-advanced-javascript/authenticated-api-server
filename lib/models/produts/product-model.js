'use strict';
const schema=require('./product-schema.js');
const Model=require('../mongo.js');
/**
 * @constructor Product
 */
class product extends Model{
  constructor(){
    super(schema);
  }
}
module.exports=new product();