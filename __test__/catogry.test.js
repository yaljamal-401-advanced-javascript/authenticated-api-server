'use strict';
require('@code-fellows/supergoose');
const catogry = require('../lib/models/categrories/catogry-model.js');
const obj = {
  name: 'electronices',
  description: 'electronices',
  display_name: 'electronices',
};
describe('catogry Modle ', () => {
  it('create ()', () => {
    return catogry.create(obj).then((result) => {
      Object.keys(obj).forEach((keys) => {
        expect(result[keys]).toEqual(obj[keys]);
      });
    });
  });
  it('get ()', () => {
    return catogry.get().then((result) => {
      Object.keys(obj).forEach((keys) => {
        expect(result[0][keys]).toEqual(obj[keys]);
      });
    });
  });
  it('get(id)', () => {
    return catogry.get(obj.id).then((result) => {
      Object.keys(obj).forEach((keys) => {
        expect(result[0][keys]).toEqual(obj[keys]);
      });
    });
  });
  it('put(id)',()=>{
    let newObj={
      name: 'cars',
      description: 'cars',
      display_name: 'cars',
    };
    return catogry.get().then((result) => {
      const id = result[0]._id;
      return catogry.update(id,newObj).then((result) => {
        Object.keys(newObj).forEach((key) => {
          expect(result[key]).toEqual(newObj[key]);
        });
      });
    });
  
  });

  it('delete', () => {
    return catogry.get().then((result) => {
      const id = result[0]._id;
      return catogry.delete(id).then((result) => {
        return catogry.get().then((result2) => {
          expect(result2).toEqual([]);
        });
      });
    });
  });


});