(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', './attribute', './classname'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('./attribute'), require('./classname'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.attribute, global.classname);
    global.index = mod.exports;
  }
})(this, function (module, exports, _attribute, _classname) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _attribute2 = _interopRequireDefault(_attribute);

  var _classname2 = _interopRequireDefault(_classname);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    attribute: _attribute2.default,
    classname: _classname2.default
  };
  module.exports = exports['default'];
});