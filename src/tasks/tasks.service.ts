import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as french from '../data/french.json';

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);
    private currentIndex = 0;

    @Cron(CronExpression.EVERY_SECOND)
    handleCron() {
        const sentenceToTwit = `La double piqure pour ${french[this.currentIndex]} ! 💉💉`;
        this.currentIndex++;

        this.logger.debug(sentenceToTwit);
        
    }
}