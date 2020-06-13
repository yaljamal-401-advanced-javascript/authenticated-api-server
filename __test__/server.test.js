'use strict';
const {server}=require('../lib/server.js');
const supergoose=require('@code-fellows/supergoose');
const mockRequest=supergoose(server);

describe('products routes  ' , ()=>{
  it('it sholud post the new Product',()=>{
    let obj={
      category: 'electronices',
      name: 'smart phone',
      display_name: 'iphone 11',
      description: '512 GB',
    };
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        const record=result.body;
        console.log(record);
        Object.keys(obj).forEach(key=>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('it sholud get the new Product',()=>{
    let obj={
      category: 'electronices',
      name: 'smart phone',
      display_name: 'iphone 11',
      description: '512 GB',
    };
    return mockRequest.post('/api/v1/products')
      .send(obj)
      .then((result)=>{
        return mockRequest.get('/api/v1/products')
          .then((item)=>{
            Object.keys(obj).forEach(key=>{
              expect(item.body.result[1][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
});