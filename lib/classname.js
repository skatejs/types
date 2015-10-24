(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.classname = mod.exports;
  }
})(this, function (exports, module) {
  'use strict';

  function getClassList(element) {
    var classList = element.classList;
    if (classList) {
      return classList;
    }
    var className = element.attributes['class'];
    className = className && (className.value || className.nodeValue) || '';
    return className && className.split(/\s+/) || [];
  }

  module.exports = {
    create: function create(opts) {
      var elem = document.createElement(opts['extends'] || 'div');
      elem.className = opts.name;
      return elem;
    },
    filter: function filter(elem, defs) {
      var classList = getClassList(elem);
      var classListLen = classList.length;
      var definitions = [];
      var tag = (elem.tagName || elem.localName).toLowerCase();

      for (var a = 0; a < classListLen; a++) {
        var className = classList[a];
        var definition = defs[className];

        if (!definition) {
          continue;
        }

        var tagToExtend = definition['extends'];
        if (!tagToExtend || tag === tagToExtend) {
          definitions.push(definition);
        }
      }

      return definitions;
    }
  };
});