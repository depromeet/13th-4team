import type { api as API } from '@monorepo/common';
import { ApiProperty } from '@nestjs/swagger';

export class GetPublicIndexResponseDto
  implements API.GetPublicIndexResponseBody
{
  @ApiProperty({ description: '기본 문자열' })
  text: string;

  constructor(properties: GetPublicIndexResponseDto) {
    this.text = properties.text;
  }
}
