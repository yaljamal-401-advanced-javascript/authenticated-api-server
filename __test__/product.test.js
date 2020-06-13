'use strict';
require('@code-fellows/supergoose');
const product = require('../lib/models/produts/product-model.js');
const obj = {
  category: 'electronices',
  name: 'camera',
  display_name: 'cannon',
  description: '25 MP',
};
describe('Product Modle ',()=>{
  it('create ()',()=>{
    return product.create(obj).then((result)=>{
      Object.keys(obj).forEach((keys)=>{
        expect(result[keys]).toEqual(obj[keys]);
      });
    });
  });
  it('get ()',()=>{
    return product.get().then((result)=>{
      Object.keys(obj).forEach((keys)=>{
        expect(result[0][keys]).toEqual(obj[keys]);
      });
    });
  });
  it('get(id)',()=>{
    return product.get(obj.id).then((result)=>{
      // console.log(result);
      Object.keys(obj).forEach((keys)=>{
        expect(result[0][keys]).toEqual(obj[keys]);
      });
    });
  });
  it('put(id)',()=>{
    let newObj={
      category: 'electronices',
      name: 'smart phone',
      display_name: 'iphone 11',
      description: '512 GB',
    };
    return product.get().then((result) => {
      const id = result[0]._id;
      return product.update(id,newObj).then((result) => {
        Object.keys(newObj).forEach((key) => {
          expect(result[key]).toEqual(newObj[key]);
        });
      });
    });
  
  });

  it('delete', () => {
    return product.get().then((result) => {
      const id = result[0]._id;
      return product.delete(id).then((result) => {
        return product.get().then((result2) => {
          expect(result2).toEqual([]);
        });
      });
    });
  });
});