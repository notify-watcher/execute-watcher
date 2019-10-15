const axios = require('axios');
const cheerio = require('cheerio');
const lodash = require('lodash');

/**
 * Execute a watcher with the notify-watcher/core libs provided
 * @param {Object} watcher Watcher to be executed
 * @param {Object} options Options to pass to the watcher
 */
function execute(watcher, options) {
  return watcher({
    ...options,
    libs: {
      axios,
      cheerio,
      lodash,
    },
  });
}

module.exports = execute;
