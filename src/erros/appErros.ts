export class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, menssage: string) {
    super(menssage);
    this.statusCode = statusCode;
  }
}
