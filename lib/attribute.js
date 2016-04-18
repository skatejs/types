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
    global.attribute = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    create: function create(opts) {
      var elem = document.createElement(opts.extends || 'div');
      elem.setAttribute(opts.id, '');
      return elem;
    },
    reduce: function reduce(elem, defs) {
      var attrs = elem.attributes;
      var attrsLen = attrs.length;
      var tag = (elem.tagName || elem.localName).toLowerCase();

      for (var a = 0; a < attrsLen; a++) {
        var attr = attrs[a].nodeName;
        var definition = defs[attr];

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