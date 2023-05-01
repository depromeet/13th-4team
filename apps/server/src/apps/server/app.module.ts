import {
  ClassSerializerInterceptor,
  Module,
  ValidationPipe,
} from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { DatabaseModule } from 'src/modules/database/database.module';
import { EnvModule } from 'src/modules/env/env.module';
import { LogModule } from 'src/modules/log/log.module';
import { ValidationException } from './exceptions/validation.exception';
import { CustomExceptionFilter } from './filters/custom-exception.filter';
import { LogInterceptor } from './interceptors/log.interceptor';
import { IndexRouterModule } from './router/index.router';

@Module({
  imports: [
    DatabaseModule.forRoot(),
    EnvModule.forRoot(),
    LogModule.forRoot(),
    IndexRouterModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LogInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_PIPE,
      useFactory: () =>
        new ValidationPipe({
          transform: true,
          transformOptions: {
            enableImplicitConversion: true,
          },
          whitelist: true,
          forbidNonWhitelisted: true,
          exceptionFactory: (errors) => {
            const errorString = ValidationException.factory(errors);

            throw new ValidationException({
              title: '데이터 형식이 맞지 않습니다.',
              message: errorString,
              raw: new Error(JSON.stringify(errors)),
            });
          },
        }),
    },
  ],
})
export class AppModule {}
