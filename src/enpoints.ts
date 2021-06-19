import { NestExpressApplication } from "@nestjs/platform-express";

export const applyEndPoints = (app: NestExpressApplication) => {

  //  size limit
  app.use("*", (req, _res, next) => {
    const query = req.query.query || req.body.query || "";
    if (query.length > 2000) {
      throw new Error("Query too large");
    }
    next();
  });
};
