import { DynamicModule, Module } from '@nestjs/common';
import { NestjsSlackWebhookService } from './nestjs-slack-webhook.service';
import {nestjsSlackWebhookModuleInterface} from "./nestjs-slack-webhook.interfaces";

@Module({})
export class NestjsSlackWebhookModule {
    static forRoot(
        url: string,
        options: nestjsSlackWebhookModuleInterface,
    ): DynamicModule {
        const providers = [
            {
                provide: NestjsSlackWebhookService,
                useValue: new NestjsSlackWebhookService(url, options),
            },
        ];

        return {
            providers: providers,
            exports: providers,
            module: NestjsSlackWebhookModule,
        };
    }
}