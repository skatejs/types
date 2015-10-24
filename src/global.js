import skateTypes from './index';

var previousSkateTypes = window.skateTypes;
function noConflict () {
  window.skateTypes = previousSkateTypes;
  return this;
}

skateTypes.noConflict = noConflict;
window.skateTypes = skateTypes;

export default skateTypes;
