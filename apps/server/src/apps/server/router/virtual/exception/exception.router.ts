import { Module } from '@nestjs/common';
import { ExceptionController } from './exception.controller';

@Module({
  imports: [],
  controllers: [ExceptionController],
})
export class ExceptionRouter {}
