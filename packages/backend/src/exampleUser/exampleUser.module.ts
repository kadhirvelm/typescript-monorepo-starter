import { Module } from "@nestjs/common";
import { PrismaModule } from "../database/prisma.module";
import { ExampleUserController } from "./exampleUser.controller";
import { ExampleUserService } from "./exampleUser.service";

@Module({
  controllers: [ExampleUserController],
  imports: [PrismaModule],
  providers: [ExampleUserService],
})
export class ExampleUserModule {}
