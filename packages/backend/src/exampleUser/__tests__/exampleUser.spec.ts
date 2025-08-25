import { afterAll, beforeAll, describe, test } from "bun:test";
import type { INestApplication } from "@nestjs/common";
import { ExampleUserServiceDefinition } from "../../../../api/services/exampleUser";
import { ConfigurationModule } from "../../configuration/configuration.module";
import { constructRequest } from "../../library/__tests__/constructRequest";
import { createTestApp } from "../../library/__tests__/createApp";
import { ExampleUserModule } from "../exampleUser.module";

describe("ExampleUserModule", () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await createTestApp([ConfigurationModule, ExampleUserModule]);
  });

  test("GET user after creating", async () => {
    const response = await constructRequest(
      app,
      ExampleUserServiceDefinition,
      "create",
      { name: "test" },
    ).expect(201);

    await constructRequest(app, ExampleUserServiceDefinition, "get", {
      id: response.body.id,
    })
      .expect(200)
      .expect({
        id: response.body.id,
        name: "test",
      });
  });

  test("GET non existing user", async () => {
    await constructRequest(app, ExampleUserServiceDefinition, "get", {
      id: "1",
    }).expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
