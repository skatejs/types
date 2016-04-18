(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.classname = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function getClassList(element) {
    var classList = element.classList;
    if (classList) {
      return classList;
    }
    var className = element.attributes['class'];
    className = className && (className.value || className.nodeValue) || '';
    return className && className.split(/\s+/) || [];
  }

  exports.default = {
    create: function create(opts) {
      var elem = document.createElement(opts.extends || 'div');
      elem.className = opts.id;
      return elem;
    },
    reduce: function reduce(elem, defs) {
      var classList = getClassList(elem);
      var classListLen = classList.length;
      var tag = (elem.tagName || elem.localName).toLowerCase();

      for (var a = 0; a < classListLen; a++) {
        var className = classList[a];
        var definition = defs[className];

        if (!definition) {
          continue;
        }

        var tagToExtend = definition.extends;
        if (!tagToExtend || tag === tagToExtend) {
          return definition;
        }
      }

      return false;
    }
  };
  module.exports = exports['default'];
});