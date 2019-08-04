'use strict';

module.exports = set;

function set(target = {}) {
	return function setKeyValue(str) {
		const arr = str.split('=');
		return target[arr[0]] = arr[1];
	};
}
