"use strict";function _createForOfIteratorHelper(r,t){var e;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(e=_unsupportedIterableToArray(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,t=function(){};return{s:t,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,i=!1;return{s:function(){e=r[Symbol.iterator]()},n:function(){var r=e.next();return a=r.done,r},e:function(r){i=!0,o=r},f:function(){try{a||null==e.return||e.return()}finally{if(i)throw o}}}}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var maxCharsUsed=function(r){var t={},e=0,n="",o=_createForOfIteratorHelper(r);try{for(o.s();!(a=o.n()).done;){var a=a.value;t[a]=(t[a]||0)+1,t[a]>e&&(e=t[n=a])}}catch(r){o.e(r)}finally{o.f()}return n};console.log(maxCharsUsed("4444456tdetet34543543"));