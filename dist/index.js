(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.skatejsTypes = factory());
}(this, function () {

  var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
  function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

  var classname = __commonjs(function (module, exports, global) {
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
  })(__commonjs_global, function (module, exports) {
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
  });

  var require$$0 = (classname && typeof classname === 'object' && 'default' in classname ? classname['default'] : classname);

  var attribute = __commonjs(function (module, exports, global) {
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
  })(__commonjs_global, function (module, exports) {
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
  });

  var require$$1 = (attribute && typeof attribute === 'object' && 'default' in attribute ? attribute['default'] : attribute);

  var index = __commonjs(function (module, exports, global) {
  (function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(['module', 'exports', './attribute', './classname'], factory);
    } else if (typeof exports !== "undefined") {
      factory(module, exports, require$$1, require$$0);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod, mod.exports, global.attribute, global.classname);
      global.index = mod.exports;
    }
  })(__commonjs_global, function (module, exports, _attribute, _classname) {
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
  });

  var main = (index && typeof index === 'object' && 'default' in index ? index['default'] : index);


  var api = Object.freeze({
    default: main
  });

  var previousGlobal = window.skatejsTypes;
  main.noConflict = function noConflict() {
    window.skatejsTypes = previousGlobal;
    return this;
  };
  window.skatejsTypes = main;
  for (var name in api) {
    main[name] = api[name];
  }
  main.version = '0.1.0';

  return main;

}));
//# sourceMappingURL=index.js.map