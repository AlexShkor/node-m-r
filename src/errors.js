var util = require('util');

//
// InvalidOperationError
//
var InvalidOperationError = exports.InvalidOperationError = function(message, error) {
	this.error = error;
	this.name = 'InvalidOperationError';

	Error.call(this, message);
	Error.captureStackTrace(this, arguments.callee);
};

util.inherits(InvalidOperationError, Error);