import type { api as API } from '@monorepo/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, MinLength } from 'class-validator';

export class PostVirtualExceptionRequestDto
  implements API.PostVirtualExceptionRequestBody
{
  @ApiProperty({ description: 'int', default: 0 })
  @IsInt()
  @IsPositive()
  positiveInt: number;

  @ApiProperty({ description: '양의 정수값', default: '' })
  @MinLength(4, { message: '최소 4글자 이상' })
  min4Length: string;
}
