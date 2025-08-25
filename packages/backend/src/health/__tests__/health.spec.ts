import type { INestApplication } from "@nestjs/common";
import { HealthServiceDefinition } from "@tsm-example/api";
import { constructRequest } from "../../library/__tests__/constructRequest";
import { createTestApp } from "../../library/__tests__/createApp";
import { VERSION } from "../health.controller";
import { HealthModule } from "../health.module";

describe("HealthModule", () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await createTestApp([HealthModule]);
  });

  it("GET health", () => {
    constructRequest(app, HealthServiceDefinition, "ready")
      .expect(200)
      .expect({
        status: `ok - ${VERSION}`,
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
