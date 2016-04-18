function getClassList (element) {
  var classList = element.classList;
  if (classList) {
    return classList;
  }
  var className = element.attributes['class'];
  className = className && (className.value || className.nodeValue) || '';
  return (className && className.split(/\s+/)) || [];
}

export default {
  create (opts) {
    var elem = document.createElement(opts.extends || 'div');
    elem.className = opts.id;
    return elem;
  },
  reduce (elem, defs) {
    var classList = getClassList(elem);
    var classListLen = classList.length;
    var tag = (elem.tagName || elem.localName).toLowerCase();

    for (let a = 0; a < classListLen; a++) {
      let className = classList[a];
      let definition = defs[className];

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
