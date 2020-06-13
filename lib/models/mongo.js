'use strict';
/**
 * module Model
 * @module Model
 */
/**
 * Model Constructor
 * @param {object} schema
 */
class Model{
  constructor(schema){
    this.schema=schema;
  }
  /**
     * get one or all
     * @param {number} _id
     * @return {array} the records
     */
  get(_id){
    const queryObject = _id ? {_id}:{};
    return this.schema.find(queryObject);
  }
  /**
   * Create a record
   * @param {object} record
   */
  create(record){
    const newRecord=new this.schema(record);
    return newRecord.save();
  }

  /**
   * update recourd in the database
   * @param {number} 
   * @param {object}
   * @param {object}
   */
  update(_id,record){
    return this.schema.findByIdAndUpdate(_id,record,{new:true});
  }

  /**
   * delete a recourd in the model
   * @param id {string}
   */
  delete(_id){
    return this.schema.findByIdAndDelete(_id);
  }
}
module.exports=Model;