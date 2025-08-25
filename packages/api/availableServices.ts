import type { ServiceDefinition } from "./genericTypes/service";
import {
  type ExampleUserApi,
  ExampleUserServiceDefinition,
} from "./services/exampleUser";
import {
  type HealthServiceApi,
  HealthServiceDefinition,
} from "./services/health";

export type AvailableServices = {
  health: HealthServiceApi;
  exampleUser: ExampleUserApi;
};

export type AvailableServicesDefinition = {
  [key in keyof AvailableServices]: ServiceDefinition<AvailableServices[key]>;
};

export const AVAILABLE_SERVICES: AvailableServicesDefinition = {
  exampleUser: ExampleUserServiceDefinition,
  health: HealthServiceDefinition,
};
