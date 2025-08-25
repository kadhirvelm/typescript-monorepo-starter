import type { INestApplication } from "@nestjs/common";
import type {
  RemoveExtendsString,
  Service,
  ServiceDefinition,
  ServiceEndpoint,
} from "@tsm-example/api";
import request from "supertest";

export function constructRequest<
  TestService extends Service,
  Endpoint extends keyof RemoveExtendsString<TestService>,
>(
  app: INestApplication,
  definition: ServiceDefinition<TestService>,
  endpoint: Endpoint,
  payload?: TestService[Endpoint]["payload"],
) {
  const testAgent = request(app.getHttpServer());

  const typedEndpoint = endpoint as keyof typeof definition.endpoints;
  const method: ServiceEndpoint<string> = definition.endpoints[
    typedEndpoint
  ] as ServiceEndpoint<string>;

  if (typeof method === "string") {
    const finalEndpoint = `/${definition.controller}/${method}`;
    return testAgent.post(finalEndpoint).send(payload ?? {});
  }

  const finalEndpoint = `/${definition.controller}/${method.path}`;
  if (method.method === "GET" && payload === undefined) {
    return testAgent.get(finalEndpoint);
  }

  if (method.method === "GET" && payload !== undefined) {
    return testAgent
      .get(finalEndpoint)
      .query(payload as Record<string, string>);
  }

  if (method.method === "POST") {
    return testAgent.post(finalEndpoint).send(payload ?? {});
  }

  if (method.method === "PUT") {
    return testAgent.put(finalEndpoint).send(payload ?? {});
  }

  if (method.method === "DELETE") {
    return testAgent.delete(finalEndpoint).send(payload ?? {});
  }

  if (method.method === "PATCH") {
    return testAgent.patch(finalEndpoint).send(payload ?? {});
  }

  throw new Error(`Unsupported method: ${method.method}`);
}
