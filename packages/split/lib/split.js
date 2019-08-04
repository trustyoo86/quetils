'use strict';

const set = require('@quetils/set');

module.exports = split;

function split(url) {
	const queries = {};
	
	if (url) {
		const queryStr = url.split('?')[1];
		const splitFunc = set(queries);
		url.split('&').forEach(splitFunc);
	}

	return queries;
}
