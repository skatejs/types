// src/index.js
__7ddb6a78eaea9464fd34a8960235d237 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = {
    create: function create(opts) {
      var elem = document.createElement(opts['extends'] || 'div');
      elem.setAttribute(opts.id, '');
      return elem;
    },
    filterDefinitions: function filterDefinitions(elem, defs) {
      var attrs = elem.attributes;
      var attrsLen = attrs.length;
      var definitions = [];
      var tag = elem.tagName.toLowerCase();
  
      for (var a = 0; a < attrsLen; a++) {
        var attr = attrs[a].nodeName;
        var definition = defs[attr];
  
        if (definition && definition.type === this) {
          var tagToExtend = definition['extends'];
          if (!tagToExtend || tag === tagToExtend) {
            definitions.push(definition);
          }
        }
      }
  
      return definitions;
    }
  };
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);