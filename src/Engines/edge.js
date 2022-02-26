
const {edge} = require 'edge'
const TemplateEngine = require("./TemplateEngine");

class Edge extends TemplateEngine {
  constructor(name, dirs, config) {
    super(name, dirs, config);

    this.setLibrary(this.config.libraryOverrides.edge);
  }
  



  module.exports = Mustache;
