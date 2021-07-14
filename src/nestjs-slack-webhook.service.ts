import { Injectable } from '@nestjs/common';
import { IncomingWebhook } from '@slack/webhook';
import {nestjsSlackWebhookModuleInterface} from './nestjs-slack-webhook.interfaces';

@Injectable()
export class NestjsSlackWebhookService {
    private webhook;

    constructor(url: string, opts: nestjsSlackWebhookModuleInterface) {
        this.webhook = new IncomingWebhook(url, {
            icon_emoji: opts.emoji,
            username: opts.username
        });
    }

    send(opts): void {
        (async () => {
            await this.webhook.send({
                text: opts.text
            });
        })();
    }
}