import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Env } from 'src/env';
import * as french from '../data/french.json';
import Twit =require('twit');


@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);
    private currentIndex = 0;

    private twit = new Twit({
        consumer_key: Env.CONSUMER_KEY,
        consumer_secret: Env.CONSUMER_SECRET,
        access_token: Env.ACCESS_TOKEN,
        access_token_secret: Env.ACCESS_TOKEN_SECRET,
    })

    @Cron(CronExpression.EVERY_HOUR)
    handleCron() {
        const sentenceToTweet = `${french[this.currentIndex]} prend sa dose ! 💉💉`;
        this.currentIndex++;

        this.logger.debug(sentenceToTweet);

        this.twit.post('statuses/update', { status: sentenceToTweet }, (err) => {
            if(err) {
                this.logger.error(err)
                return;
            }

            this.logger.log('===> Tweet sent.');
        });

    }
}