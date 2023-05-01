import { Module } from '@nestjs/common';
import { VirtualController } from './virtual.controller';
import { ExceptionRouter } from './exception/exception.router';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    ExceptionRouter,
    RouterModule.register([
      {
        module: ExceptionRouter,
        path: 'virtual/exception',
      },
    ]),
  ],
  controllers: [VirtualController],
})
export class VirtualRouter {}
