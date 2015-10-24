// src/attribute.js
__54026cc39d66d3aed10e4fe87255cdd3 = (function () {
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
    filter: function filter(elem, defs) {
      var attrs = elem.attributes;
      var attrsLen = attrs.length;
      var definitions = [];
      var tag = (elem.tagName || elem.localName).toLowerCase();
  
      for (var a = 0; a < attrsLen; a++) {
        var attr = attrs[a].nodeName;
        var definition = defs[attr];
  
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
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);
// src/classname.js
__3234d8f48147f132a33e6e88b1b16f31 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
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
  
  exports['default'] = {
    create: function create(opts) {
      var elem = document.createElement(opts['extends'] || 'div');
      elem.className = opts.id;
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
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);
// src/index.js
__ba05207d5a5325eca46834e0ad2b8428 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _attribute = __54026cc39d66d3aed10e4fe87255cdd3;
  
  var _attribute2 = _interopRequireDefault(_attribute);
  
  var _classname = __3234d8f48147f132a33e6e88b1b16f31;
  
  var _classname2 = _interopRequireDefault(_classname);
  
  exports['default'] = {
    attribute: _attribute2['default'],
    classname: _classname2['default']
  };
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);
// src/global.js
__d1542c3ec42bede5f7c7a7513bed47ad = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _index = __ba05207d5a5325eca46834e0ad2b8428;
  
  var _index2 = _interopRequireDefault(_index);
  
  var previousSkateTypes = window.skateTypes;
  function noConflict() {
    window.skateTypes = previousSkateTypes;
    return this;
  }
  
  _index2['default'].noConflict = noConflict;
  window.skateTypes = _index2['default'];
  
  exports['default'] = _index2['default'];
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);