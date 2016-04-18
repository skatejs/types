export default {
  create (opts) {
    var elem = document.createElement(opts.extends || 'div');
    elem.setAttribute(opts.id, '');
    return elem;
  },
  reduce (elem, defs) {
    var attrs = elem.attributes;
    var attrsLen = attrs.length;
    var tag = (elem.tagName || elem.localName).toLowerCase();

    for (let a = 0; a < attrsLen; a++) {
      let attr = attrs[a].nodeName;
      let definition = defs[attr];

      if (!definition) {
        continue;
      }

      let tagToExtend = definition.extends;
      if (!tagToExtend || tag === tagToExtend) {
        return definition;
      }
    }

    return false;
  }
};
