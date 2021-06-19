import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {Logger} from "@nestjs/common";
import {applyExpressMiddlewares} from "./middlewares";
import {applyEndPoints} from "./enpoints";
import {APP_CONFIGS} from "./environments";


declare const module: any;

const bootstrap = async () => {
    try {
        const app = await NestFactory.create<NestExpressApplication>(AppModule);

        applyExpressMiddlewares(app);

        applyEndPoints(app);

        // Starts listening for shutdown hooks
        app.enableShutdownHooks();

        await app.listen(APP_CONFIGS.HTTP_PORT);

        // NOTE: hot module replacement
        if (module.hot) {
            module.hot.accept();
            module.hot.dispose(() => app.close());
        }
    } catch (error) {
        Logger.error(`❌  Error starting server`, error, APP_CONFIGS.SERVER_NAME, false);
        process.exit();
    }
};

(async () => {
    bootstrap().then(() => console.log(`🚀 ${APP_CONFIGS.SERVER_NAME} running at PORT :${APP_CONFIGS.HTTP_PORT}`));
})();