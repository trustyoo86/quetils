'use strict';

const chai = require('chai');
const set = require('../lib/set');
const should = chai.should();

describe('[@quetils/set]', () => {
	let url = '';
  it('Should be return empty object if url query is empty string.', () => {
		const obj = {};
		const setFunc = set(obj);
		const arr = [];
		arr.forEach(setFunc);
		JSON.stringify(obj).should.be.equal('{}');
	});
});
