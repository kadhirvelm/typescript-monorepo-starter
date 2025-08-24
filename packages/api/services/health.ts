import type { Service, ServiceDefinition } from "../genericTypes/service";

export interface HealthServiceApi extends Service {
  ready: {
    payload: null;
    response: { status: string };
  };
}

export const HealthServiceDefinition: ServiceDefinition<HealthServiceApi> = {
  controller: "health",
  endpoints: {
    ready: {
      method: "GET",
      path: "ready",
    },
  },
};
