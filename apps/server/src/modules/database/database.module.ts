import { DynamicModule, Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [],
})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: DatabaseModule,
    };
  }
}
