'use strict';
const {server}=require('../lib/server.js');
const supertest=require('supertest');
const mockServer=supertest(server);


describe('products routes  ' , ()=>{
  it('should respond with 404 on an invalid route',()=>{
    return mockServer.get('/test').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('should respond with 404 on an invalid method',()=>{
    return mockServer.delete('/test/5').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('should respond with 404 on an invalid method',()=>{
    return mockServer.put('/test/5').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  it('should respond with 404 on an invalid method',()=>{
    return mockServer.post('/test').then((result)=>{
      expect(result.status).toBe(404);
    });
  });
  
});
