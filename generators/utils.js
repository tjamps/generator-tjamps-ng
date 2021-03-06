'use strict';

const _ = require('lodash');

/**
 *
 * @param componentName
 * @returns {{baseName: string, directory: string, filenameBase: string, module: string}}
 */
function generateComponentMeta(componentName) {
  return {
    baseName: _.camelCase(componentName),
    directory: 'app/components/' + _.kebabCase(componentName) + '/',
    filenameBase: _.kebabCase(componentName),
    module: 'app.' + _.camelCase(componentName),
  };
}

/**
 *
 * @param componentName
 * @param type
 * @returns {string}
 */
function generateFilename(componentName, type, extension) {
  var meta = generateComponentMeta(componentName);

  return meta.directory + meta.filenameBase + '.' + type + (extension ? '.' + extension : '.js');
}

/**
 *
 * @param componentName
 * @returns {string}
 */
function generateModuleName(componentName) {
  var meta = generateComponentMeta(componentName);

  return meta.module;
}

/**
 *
 * @param componentName
 * @returns {*}
 */
function generateBasename(componentName) {
  var meta = generateComponentMeta(componentName);

  return meta.baseName;
}

module.exports = {
  generateComponentMeta: generateComponentMeta,
  generateFilename: generateFilename,
  generateModuleName: generateModuleName,
  generateBasename: generateBasename
};
