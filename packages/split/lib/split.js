'use strict';

const set = require('@quetils/set');

module.exports = split;

function split(url) {
	let arr = [];
	if (url) {
		const queryStr = url.split('?')[1];
		arr = url.split('&');
	}

	return arr;
}
