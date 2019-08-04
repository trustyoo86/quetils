'use strict';

const make = require('../lib/make');
const chai = require('chai');
const should = chai.should();

describe('[@quetils/make]', () => {
	let url = '';
	it('Should be return empty object if url query is empty string.', () => {
		JSON.stringify(make(url)).should.be.equal('{}');
	});
});
