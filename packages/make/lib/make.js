'use strict';

const split = require('@quetils/split');
const set = require('@quetils/set');

module.exports = make;

function make(url) {
	const queries = {};

	if (url) {
		const arr = split(url);
		const splitFunc = set(queries);
		arr.forEach(splitFunc);
	}

	return queries;
}
