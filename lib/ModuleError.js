/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
"use strict";

const WebpackError = require("./WebpackError");
const { cleanUp } = require("./ErrorHelpers");

class ModuleError extends WebpackError {
	constructor(module, err) {
		super(err && typeof err === "object" && err.message ? err.message : err);

		this.name = "ModuleError";
		this.module = module;
		this.error = err;
		this.details =
			err && typeof err === "object" && err.stack
				? cleanUp(err.stack, this.message)
				: undefined;

		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = ModuleError;
