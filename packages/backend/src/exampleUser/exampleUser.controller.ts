import { Body, Controller, Query } from "@nestjs/common";
import {
  type ExampleUserApi,
  ExampleUserServiceDefinition,
} from "../../../api/services/exampleUser";
import {
  getDecorator,
  type ServiceControllerInterface,
} from "../genericTypes/controller";
import { ExampleUserService } from "./exampleUser.service";

export const VERSION = "1.0.0";

@Controller(ExampleUserServiceDefinition.controller)
export class ExampleUserController
  implements ServiceControllerInterface<ExampleUserApi>
{
  public constructor(private readonly exampleUserService: ExampleUserService) {}

  @getDecorator(ExampleUserServiceDefinition.endpoints.create)
  public async create(@Body() payload: ExampleUserApi["create"]["payload"]) {
    return this.exampleUserService.create(payload.name);
  }

  @getDecorator(ExampleUserServiceDefinition.endpoints.get)
  public async get(@Query() payload: ExampleUserApi["get"]["payload"]) {
    return this.exampleUserService.get(payload.id);
  }
}
