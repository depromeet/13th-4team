import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class ExceptionTestQueryDto {
  @ApiPropertyOptional({ description: '양의 정수값', default: 0 })
  @IsOptional()
  @IsInt()
  @IsPositive()
  positiveInt: number;
}
