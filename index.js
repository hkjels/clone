
/**
 * Clone an object.
 */

var clone = module.exports = (function(){
  "use strict";
  return function (obj) { Clone.prototype=obj; return new Clone() };
  function Clone(){}
}());

