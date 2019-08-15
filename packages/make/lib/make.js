'use strict';

const split = require('@quetils/split');
const set = require('@quetils/set');

module.exports = make;

/**
 * Make query string object
 * 
 * @param {Object} [obj = {}] Object to make
 * @return {Object} Object after make
 */
function makeObject(obj = {}, url = '') {
  const target = Object.assign({}, obj);

  const arr = split(url);
  const splitFunc = set(target);
  arr.forEach(splitFunc);
  return target;
}


/**
 * url query string make object
 *
 * @param {string} url url string
 * @return {Object} make query object
 */
function make(url) {
  let queries = {};
  
  if (url) { queries = makeObject(queries, url); }

  return queries;
}