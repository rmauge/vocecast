export abstract class BaseError extends Error {
  constructor(message?: string, cause?: unknown) {
    super(message);
    this.name = new.target.name;
    this.cause = cause;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ApplicationError extends BaseError {
  constructor(message?: string, cause?: unknown) {
    super(message, cause);
  }
}

export class EntityNotFound extends ApplicationError {
  constructor(message?: string, cause?: unknown) {
    super(message, cause);
  }
}

export class NotAllowed extends ApplicationError {
  constructor(message?: string, cause?: unknown) {
    super(message, cause);
  }
}

export class ClientError extends ApplicationError {
  constructor(message?: string, cause?: unknown) {
    super(message, cause);
  }
}

export class ValidationError extends ApplicationError {
  constructor(message?: string, cause?: unknown) {
    super(message, cause);
  }
}
