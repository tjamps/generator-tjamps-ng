'use strict';

const Generator = require('yeoman-generator');
const utils = require('../utils.js');
const _ = require('lodash');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('componentName', {
      type: String,
      required: false,
      defaults: '',
      desc: 'Name of the component where the configuration will be generated.'
    });
  }

  writing() {
    var component = this.options.componentName;
    var filename = utils.generateFilename(component, 'routes');
    var moduleName = utils.generateModuleName(component);
    var closureName = _.camelCase(moduleName) + 'Routes';

    this.fs.copyTpl(this.templatePath('uiroute.js'), this.destinationPath(filename), {moduleName: moduleName, closureName: closureName});
  }
};
