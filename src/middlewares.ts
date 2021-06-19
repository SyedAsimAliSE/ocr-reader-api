import { NestExpressApplication } from "@nestjs/platform-express";
import * as bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import { TimeoutInterceptor } from "./common";
import { DEFAULT_CORS_URLS } from "./environments";

export const applyExpressMiddlewares = (app: NestExpressApplication) => {

  app.enable("trust proxy");
  app.disable("x-powered-by");

  app.use(compression());
  // app.use(helmet());
  app.use(
    helmet({
      contentSecurityPolicy: process.env.NODE_ENV === "production" ? undefined : false
    })
  );
  app.use(helmet.xssFilter());
  app.use(helmet.frameguard({ action: "deny" }));
  app.use(helmet.ieNoOpen());
  app.use(helmet.noSniff());
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
      parameterLimit: 50000
    })
  );

  app.useGlobalInterceptors(new TimeoutInterceptor());

  app.enableShutdownHooks();

  // dedupe URLs (in case frontendUrl is in the default list)
  const CORS_URLS = Array.from(
    new Set<string>([...DEFAULT_CORS_URLS])
  );

  app.enableCors({
    origin: CORS_URLS,
    credentials: true
  });

};
