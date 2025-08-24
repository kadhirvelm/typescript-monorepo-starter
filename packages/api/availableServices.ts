import type { ServiceDefinition } from "./genericTypes/service";
import {
  type HealthServiceApi,
  HealthServiceDefinition,
} from "./services/health";

export type AvailableServices = {
  health: HealthServiceApi;
};

export type AvailableServicesDefinition = {
  [key in keyof AvailableServices]: ServiceDefinition<AvailableServices[key]>;
};

export const AVAILABLE_SERVICES: AvailableServicesDefinition = {
  health: HealthServiceDefinition,
};
