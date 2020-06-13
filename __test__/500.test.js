const {server}=require('../lib/server.js');
const supergoose=require('@code-fellows/supergoose');
const mockServer=supergoose(server);
describe('500 middleware mudle',()=>{
  it('it sholud response status 500 ',()=>{
    return mockServer.post('/api/v1/categories')
      .send({})
      .then((result)=>{
        expect(result.status).toBe(500);
      }).catch(e =>{});
  });
});