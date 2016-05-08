var modify = require('modify-babel-preset');

module.exports = modify('es2015', {
	// remove commonjs transform
	'transform-es2015-modules-commonjs': false,
  // remove typeof symbol
  'transform-es2015-typeof-symbol': false,
	// add external helpers
	'external-helpers': true,
  // use simple class transform (loose + without callcheck)
  'transform-es2015-classes': false,
  'transform-es2015-classes-simple': true
});
