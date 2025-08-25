import type { Service, ServiceDefinition } from "../genericTypes/service";

export interface ExampleUserApi extends Service {
  create: {
    payload: {
      name: string;
    };
    response: {
      id: string;
    };
  };
  get: {
    payload: {
      id: string;
    };
    response: {
      id: string;
      name: string;
    };
  };
}

export const ExampleUserServiceDefinition: ServiceDefinition<ExampleUserApi> = {
  controller: "example-user",
  endpoints: {
    create: "create",
    get: {
      method: "GET",
      path: "get",
    },
  },
};
