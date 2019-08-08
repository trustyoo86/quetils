'use strict';

module.exports = split;

function split(url) {
  let arr = [];
  if (url) {
    const queryStr = url.split('?')[1];
    arr = queryStr.split('&');
  }

  return arr;
}