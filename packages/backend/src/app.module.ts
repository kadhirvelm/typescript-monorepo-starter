import {
  type MiddlewareConsumer,
  Module,
  type NestModule,
} from "@nestjs/common";
import { ConfigurationModule } from "./configuration/configuration.module";
import { ExampleUserModule } from "./exampleUser/exampleUser.module";
import { HealthModule } from "./health/health.module";
import { AllExceptionsFilter } from "./library/AllExceptions.filter";
import { AppLoggerMiddleware } from "./library/AppLogger.middleware";

@Module({
  imports: [ConfigurationModule, HealthModule, ExampleUserModule],
  providers: [AllExceptionsFilter],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes("*");
  }
}
