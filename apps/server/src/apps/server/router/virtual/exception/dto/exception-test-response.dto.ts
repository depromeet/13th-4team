import { ApiProperty } from '@nestjs/swagger';

export class ExceptionTestResponseDto {
  @ApiProperty()
  ok: boolean;

  constructor(properties: ExceptionTestResponseDto) {
    this.ok = properties.ok;
  }
}
