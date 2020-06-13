'use strict';
const schema=require('./catogry-schema.js');
const Model=require('../mongo.js');

/**
 * Model Model
 * @constructor Categories
 */
class categories extends Model{
  constructor(){
    super(schema);
  }
}
module.exports=new categories();