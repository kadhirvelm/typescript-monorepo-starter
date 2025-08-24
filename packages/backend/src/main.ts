import { NestFactory } from "@nestjs/core";
import compression from "compression";
import dotenv from "dotenv";
import { json, urlencoded } from "express";
import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./library/AllExceptions.filter";

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: ".env.development" });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const allExceptions = app.get(AllExceptionsFilter);
  app.useGlobalFilters(allExceptions);

  app.use(json({ limit: "2mb" }));
  app.use(urlencoded({ extended: true, limit: "2mb" }));

  app.use(compression());

  await app.listen(8080, process.env.PUBLIC_URL ?? "0.0.0.0");
}

bootstrap();
