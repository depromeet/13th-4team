import { Body, HttpStatus, Query } from '@nestjs/common';
import { RouteTable } from 'src/apps/server/decorators/router/route-table.decorator';
import { Route } from 'src/apps/server/decorators/router/route.decorator';
import { ExceptionTestQueryDto } from './dto/exception-test-query.dto';
import { ExceptionTestRequestBodyDto } from './dto/exception-test-request-body.dto';
import { ExceptionTestResponseDto } from './dto/exception-test-response.dto';

@RouteTable({
  tag: { title: '에러', category: 'virtual' },
  path: '',
})
export class ExceptionController {
  @Route({
    summary: 'QueryParam Validation 에러 테스트',
    request: {
      method: 'GET',
      path: '',
    },
    response: {
      code: HttpStatus.OK,
    },
  })
  async getExceptionTest(@Query() query: ExceptionTestQueryDto) {
    console.log(query);
    return new ExceptionTestResponseDto({
      ok: true,
    });
  }

  @Route({
    summary: 'Body Validation 에러 테스트',
    request: {
      method: 'POST',
      path: '',
    },
    response: {
      code: HttpStatus.CREATED,
    },
    description: '에러 테스트',
  })
  async postExceptionTest(@Body() body: ExceptionTestRequestBodyDto) {
    console.log(body);

    return new ExceptionTestResponseDto({
      ok: true,
    });
  }
}
