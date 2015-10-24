(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', './attribute', './classname'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('./attribute'), require('./classname'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.attribute, global.classname);
    global.index = mod.exports;
  }
})(this, function (exports, module, _attribute, _classname) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _attribute2 = _interopRequireDefault(_attribute);

  var _classname2 = _interopRequireDefault(_classname);

  module.exports = {
    attribute: _attribute2['default'],
    classname: _classname2['default']
  };
});