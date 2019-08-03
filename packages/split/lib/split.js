'use strict';

module.exports = split;

function setKeyValue(target) {
	return function setKeyValue(str) {
		const arr = str.split('=');
		target[arr[0]] = arr[1];
	}
}

function split(url) {
	const queries = {};
	
	if (url) {
		const queryStr = url.split('?')[1];
		const splitFunc = setKeyValue(queries);
		url.split('&').forEach(splitFunc);
	}

	return queries;
}
