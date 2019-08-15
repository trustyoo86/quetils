'use strict';

const make = require('../lib/make');
const chai = require('chai');
chai.should();

describe('[@quetils/make]', () => {
  describe('[Empty object test]', () => {
    it('Should be return empty object if url query is empty string.', () => {
      const url = '';
      JSON.stringify(make(url)).should.be.equal('{}');
    });
  });

  describe('[Object test]', () => {
    const url = '/search?test1=test1&test2=test2';
    const compare = {
      test1: 'test1',
      test2: 'test2',
    };   
    it(`Should be return ${JSON.stringify(compare)} data after make`, () => {
      JSON.stringify(make(url)).should.be.equal(JSON.stringify(compare));
    });
  });
});
