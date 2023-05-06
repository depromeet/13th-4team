import type { api as API } from '@monorepo/common';
import { ApiProperty } from '@nestjs/swagger';

export class GetVirtualIndexResponseDto
  implements API.GetVirtualIndexResponseBody
{
  @ApiProperty()
  text: string;

  constructor(properties: GetVirtualIndexResponseDto) {
    this.text = properties.text;
  }
}
