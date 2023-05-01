import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class ExceptionTestRequestBodyDto {
  @ApiProperty({ description: 'int', default: 0 })
  @IsInt()
  @IsPositive()
  positiveIntTest: number;
}
