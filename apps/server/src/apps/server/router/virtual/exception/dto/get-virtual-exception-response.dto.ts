import { ApiProperty } from '@nestjs/swagger';
import { api as API } from '@monorepo/common';

export class GetVirtualExceptionResponseDto
  implements API.GetVirtualExceptionResponseBody
{
  @ApiProperty()
  ok: boolean;

  constructor(properties: GetVirtualExceptionResponseDto) {
    this.ok = properties.ok;
  }
}
