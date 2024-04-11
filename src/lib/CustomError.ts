export class CustomError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }

  static BadRequest(message: string) {
    return new CustomError(message, 400);
  }

  static Unauthorized(message: string) {
    return new CustomError(message, 401);
  }

  static AlreadyExists(message: string) {
    return new CustomError(message, 403);
  }

  static ServerError() {
    return new CustomError("ServerError", 500);
  }

  static toJSON(error: unknown) {
    const fallbackError = new CustomError("ServerError", 500);
    const e = error instanceof CustomError ? error : fallbackError;

    return [
      {
        error: e.message,
      },
      { status: e.status },
    ] as const;
  }

  toJSON() {
    return [
      {
        error: this.message,
      },
      { status: this.status },
    ] as const;
  }
}
