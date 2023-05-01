import { Module } from '@nestjs/common';
import { SlackService } from './slack.service';

@Module({
  imports: [],
  providers: [SlackService],
})
export class SlackModule {}
