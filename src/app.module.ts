import {CacheModule, HttpModule, Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {MongooseModule} from '@nestjs/mongoose'
import {TerminusModule} from '@nestjs/terminus'
import {CacheService} from './config/cache'
import {MONGO_DB_CONFIGS} from "./environments";
import {OCRReaderModule} from "./features/reader/ocr-reader.module";

@Module({
    imports: [
        TerminusModule,
        CacheModule.registerAsync({
            useClass: CacheService
        }),
        HttpModule,
        MongooseModule.forRoot(MONGO_DB_CONFIGS.uri, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            dbName: 'ocr-text',
            useFindAndModify: false
        }),

        OCRReaderModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {
}
