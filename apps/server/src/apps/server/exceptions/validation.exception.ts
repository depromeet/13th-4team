import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { ValidationError } from 'class-validator';

export class ValidationException extends BaseException {
  static factory(errors: ValidationError[]) {
    return errors.map((error) => this.parseValidateError(error)).join('\n');
  }

  private static parseValidateError(error: ValidationError): string {
    return `${error.property} / ${error.value} / ${Object.values(
      error.constraints,
    )
      .map((value) => value)
      .join(',')}`;
  }

  constructor(
    properties: Pick<ValidationException, 'title' | 'message' | 'raw'>,
  ) {
    super({
      statusCode: HttpStatus.BAD_REQUEST,
      title: properties.title,
      message: properties.message,
      raw: properties.raw,
    });
  }
}
