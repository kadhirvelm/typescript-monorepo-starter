import { ServiceDefinition } from "./genericTypes/service";
import { HealthServiceApi, HealthServiceDefinition } from "./services/health";

export type AvailableServices = {
  health: HealthServiceApi;
};

export type AvailbleServicesDefinition = {
  [key in keyof AvailableServices]: ServiceDefinition<AvailableServices[key]>;
};

export const AVAILABLE_SERVICES: AvailbleServicesDefinition = {
  health: HealthServiceDefinition,
};
