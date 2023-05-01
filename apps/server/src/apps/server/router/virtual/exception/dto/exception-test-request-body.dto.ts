import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, MinLength } from 'class-validator';

export class ExceptionTestRequestBodyDto {
  @ApiProperty({ description: 'int', default: 0 })
  @IsInt()
  @IsPositive()
  positiveIntTest: number;

  @ApiProperty({ description: '양의 정수값', default: '' })
  @IsOptional()
  @MinLength(4, { message: '최소 4글자 이상' })
  min4Length: string;
}
