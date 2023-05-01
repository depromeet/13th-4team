import type { api as API } from '@monorepo/common';
import { ApiProperty } from '@nestjs/swagger';

export class GetPrivateIndexResponseDto
  implements API.GetPrivateIndexResponseBody
{
  @ApiProperty()
  text: string;

  constructor(properties: GetPrivateIndexResponseDto) {
    this.text = properties.text;
  }
}
