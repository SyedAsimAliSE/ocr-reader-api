import * as dotenv from "dotenv";

dotenv.config();

/**
 * Returns Application Configs.
 *
 * @remarks
 * This method is part of the {@link @environment}.
 *
 * @returns Application Environment Configurations
 *
 * @beta
 * @remarks Asim
 */
export const APP_CONFIGS = {
  SERVER_NAME: process.env.SERVER_NAME,
  NODE_ENV: process.env.NODE_ENV,
  AUTHOR: process.env.AUTHOR,
  DOMAIN: process.env.DOMAIN,
  HTTP_PORT: Number(process.env.PORT) || 5656,
};

export const MONGO_DB_CONFIGS = {
  uri: process.env.MONGO_DB_URI || "mongodb://username:password@localhost:27018",
  options: {
    useNewUrlParser: process.env.USE_NEW_URL_PARSER,
    useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY,
    useCreateIndex: process.env.USE_CREATE_INDEX,
    useFindAndModify: process.env.USE_FIND_AND_MODIFY
  }
}

export const OCR_CONFIGS = {
  lang: "eng", // default
  oem: 3,
  psm: 3,
}