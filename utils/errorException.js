class ExceptionsError extends Error {
  constructor(code, message, isOperational = true, stack = '') {
    super(message);
    this.status = code;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

const BadRequest = (message) => new ExceptionsError(400, message);

const Unauthorised = (message) => new ExceptionsError(401, message);

const Forbidden = (message) => new ExceptionsError(403, message);

module.exports = { ExceptionsError, BadRequest, Unauthorised, Forbidden };
