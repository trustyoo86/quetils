'use strict';

const chai = require('chai');
const split = require('../lib/split');
const should = chai.should();

describe('[@quetils/split]', () => {
	let url = '';
	it('Should be return empty object if url query is empty string.', () => {
		JSON.stringify(split(url)).should.be.equal('{}');
	});
});
